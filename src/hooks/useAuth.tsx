import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const getDeviceFingerprint = () => {
    const nav = navigator;
    const screen = window.screen;
    const fingerprint = `${nav.userAgent}${screen.height}${screen.width}${screen.colorDepth}`;
    return btoa(fingerprint).substring(0, 50);
  };

  const checkDevice = async (userId: string) => {
    const deviceFingerprint = getDeviceFingerprint();
    const deviceName = `${navigator.platform} - ${navigator.userAgent.substring(0, 50)}`;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/check-device`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            deviceFingerprint,
            deviceName,
          }),
        }
      );

      const data = await response.json();

      if (!data.allowed) {
        await supabase.auth.signOut();
        toast({
          title: "Device Limit Reached",
          description: data.message || "Maximum 2 devices allowed. Please remove a device from your account settings.",
          variant: "destructive",
        });
        return false;
      }

      if (data.isNewDevice) {
        toast({
          title: "New Device Registered",
          description: "This device has been added to your account.",
        });
      }

      return true;
    } catch (error) {
      console.error("Device check error:", error);
      return true; // Allow login if device check fails
    }
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (event === "SIGNED_IN" && session?.user) {
          setTimeout(async () => {
            await checkDevice(session.user.id);
          }, 0);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const validatePassword = (password: string): { valid: boolean; message: string } => {
    if (password.length < 8) {
      return { valid: false, message: "Password must be at least 8 characters long" };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: "Password must contain at least one uppercase letter" };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, message: "Password must contain at least one lowercase letter" };
    }
    if (!/[0-9]/.test(password)) {
      return { valid: false, message: "Password must contain at least one number" };
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return { valid: false, message: "Password must contain at least one special character (!@#$%^&*)" };
    }
    return { valid: true, message: "" };
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      toast({
        title: "Weak Password",
        description: passwordCheck.message,
        variant: "destructive",
      });
      throw new Error(passwordCheck.message);
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      toast({
        title: "Sign Up Failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }

    toast({
      title: "Account Created",
      description: "Your account has been created successfully!",
    });
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Sign In Failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }

    toast({
      title: "Welcome Back!",
      description: "You have successfully signed in.",
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Sign Out Failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
