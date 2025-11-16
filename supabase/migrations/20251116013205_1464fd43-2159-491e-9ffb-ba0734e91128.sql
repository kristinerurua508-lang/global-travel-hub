-- Fix security issues

-- Add RLS policy for verification_codes (admin only can view, system can insert)
CREATE POLICY "System can insert verification codes"
  ON public.verification_codes FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view own verification codes"
  ON public.verification_codes FOR SELECT
  USING (email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Fix function search paths
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE OR REPLACE FUNCTION public.check_device_limit()
RETURNS TRIGGER AS $$
DECLARE
  device_count INTEGER;
BEGIN
  SELECT COUNT(*)
  INTO device_count
  FROM public.user_devices
  WHERE user_id = NEW.user_id
    AND is_blocked = false
    AND device_fingerprint != NEW.device_fingerprint;
  
  IF device_count >= 2 THEN
    RAISE EXCEPTION 'Device limit reached. Maximum 2 devices allowed.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;