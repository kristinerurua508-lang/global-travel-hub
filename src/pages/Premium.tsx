import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Premium = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Monthly",
      price: "₾49.99",
      duration: "1 month",
      discount: "15%",
      planType: "monthly",
      months: 1,
    },
    {
      name: "6 Months",
      price: "₾239.99",
      duration: "6 months",
      discount: "20%",
      planType: "six_months",
      popular: true,
      months: 6,
    },
    {
      name: "Yearly",
      price: "₾449.99",
      duration: "12 months",
      discount: "25%",
      planType: "yearly",
      months: 12,
    },
  ];

  const features = [
    "Exclusive discounts on travel packages",
    "Special rates on hotel bookings",
    "Priority customer support",
    "Access to premium travel guides",
    "Early access to deals and promotions",
    "Free cancellation on bookings",
  ];

  const handleSubscribe = async (planType: string, months: number) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to subscribe to premium.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    setLoading(true);
    try {
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + months);

      const { error } = await supabase.from("premium_subscriptions").insert({
        user_id: user.id,
        plan_type: planType,
        end_date: endDate.toISOString(),
        is_active: true,
      });

      if (error) throw error;

      toast({
        title: "Premium Activated!",
        description: "Your premium subscription has been activated successfully.",
      });

      navigate("/");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "Failed to activate premium subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Crown className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-phoenix-gradient">
            Phoenix Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive benefits and save more on your travels with Phoenix Premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-accent shadow-lg scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">per {plan.duration}</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-3 text-center">
                  <span className="text-accent font-semibold text-lg">
                    Save {plan.discount} on all bookings!
                  </span>
                </div>
                <Button
                  onClick={() => handleSubscribe(plan.planType, plan.months)}
                  disabled={loading}
                  className="w-full"
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {loading ? "Processing..." : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Premium Features</CardTitle>
            <CardDescription>Everything you get with Phoenix Premium</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Premium;
