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
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { bookingType, providerName, destination, packageDetails, price } = await req.json();

    // Check if user has premium subscription for discount
    const { data: subscription } = await supabaseClient
      .from("premium_subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .eq("is_active", true)
      .gte("end_date", new Date().toISOString())
      .single();

    let finalPrice = price;
    if (subscription) {
      const discount = subscription.discount_percentage || 15;
      finalPrice = price * (1 - discount / 100);
    }

    const { data, error } = await supabaseClient
      .from("bookings")
      .insert({
        user_id: user.id,
        booking_type: bookingType,
        provider_name: providerName,
        destination,
        package_details: packageDetails,
        price: finalPrice,
        status: "pending"
      })
      .select()
      .single();

    if (error) throw error;

    return new Response(
      JSON.stringify({ 
        booking: data,
        discountApplied: subscription ? true : false,
        originalPrice: price,
        finalPrice
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in create-booking function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
