import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { deviceFingerprint, userId, deviceName } = await req.json();

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check existing devices
    const { data: devices, error: devicesError } = await supabaseClient
      .from("user_devices")
      .select("*")
      .eq("user_id", userId)
      .eq("is_blocked", false);

    if (devicesError) throw devicesError;

    // Check if this device is already registered
    const existingDevice = devices?.find(d => d.device_fingerprint === deviceFingerprint);
    
    if (existingDevice) {
      // Update last login
      await supabaseClient
        .from("user_devices")
        .update({ last_login: new Date().toISOString() })
        .eq("id", existingDevice.id);

      return new Response(
        JSON.stringify({ 
          allowed: true, 
          isNewDevice: false 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check device count
    if (devices && devices.length >= 2) {
      return new Response(
        JSON.stringify({ 
          allowed: false, 
          isNewDevice: true,
          message: "Maximum 2 devices allowed. Please remove a device first.",
          existingDevices: devices.map(d => ({
            id: d.id,
            deviceName: d.device_name,
            lastLogin: d.last_login
          }))
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Register new device
    const { error: insertError } = await supabaseClient
      .from("user_devices")
      .insert({
        user_id: userId,
        device_fingerprint: deviceFingerprint,
        device_name: deviceName,
      });

    if (insertError) throw insertError;

    return new Response(
      JSON.stringify({ 
        allowed: true, 
        isNewDevice: true,
        message: "New device registered successfully"
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in check-device function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
