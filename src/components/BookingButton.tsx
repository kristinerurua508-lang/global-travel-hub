import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Crown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingButtonProps {
  providerName: string;
  bookingType: "travel_package" | "internet" | "hotel";
  price: number;
  destination?: string;
  packageDetails?: any;
}

export const BookingButton = ({
  providerName,
  bookingType,
  price,
  destination,
  packageDetails,
}: BookingButtonProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [discount, setDiscount] = useState(0);

  const checkPremiumStatus = async () => {
    if (!user) return;

    const { data } = await supabase
      .from("premium_subscriptions")
      .select("discount_percentage")
      .eq("user_id", user.id)
      .eq("is_active", true)
      .gte("end_date", new Date().toISOString())
      .single();

    if (data) {
      setIsPremium(true);
      setDiscount(data.discount_percentage || 15);
    }
  };

  const handleBooking = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to make a booking.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    if (!startDate) {
      toast({
        title: "Date Required",
        description: "Please select a start date for your booking.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const totalPrice = price * travelers;
      const { data, error } = await supabase.functions.invoke("create-booking", {
        body: {
          bookingType,
          providerName,
          destination,
          packageDetails: { ...packageDetails, travelers, startDate },
          price: totalPrice,
        },
      });

      if (error) throw error;

      const finalPrice = data.finalPrice || totalPrice;
      const savedAmount = totalPrice - finalPrice;

      toast({
        title: "Booking Confirmed!",
        description: `Your booking has been confirmed. ${
          savedAmount > 0 ? `You saved ₾${savedAmount.toFixed(2)} with Premium!` : ""
        }`,
      });

      setOpen(false);
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description: "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDialogOpen = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen && user) {
      checkPremiumStatus();
    }
  };

  const finalPrice = isPremium ? price * (1 - discount / 100) : price;

  return (
    <Dialog open={open} onOpenChange={handleDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Calendar className="w-4 h-4 mr-2" />
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
          <DialogDescription>
            Book {providerName} {destination && `- ${destination}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {isPremium && (
            <div className="bg-accent/10 border border-accent rounded-lg p-3 flex items-center space-x-2">
              <Crown className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">
                Premium discount applied: {discount}% off
              </span>
            </div>
          )}

          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <Label htmlFor="travelers">Number of Travelers</Label>
            <Input
              id="travelers"
              type="number"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
            />
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Price per person:</span>
              <span className="font-semibold">₾{finalPrice.toFixed(2)}</span>
            </div>
            {travelers > 1 && (
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{travelers} travelers:</span>
                <span>₾{(finalPrice * travelers).toFixed(2)}</span>
              </div>
            )}
            {isPremium && (
              <div className="flex justify-between text-sm text-accent">
                <span>You save:</span>
                <span>₾{((price - finalPrice) * travelers).toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Total:</span>
              <span>₾{(finalPrice * travelers).toFixed(2)}</span>
            </div>
          </div>

          {!isPremium && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/premium")}
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Premium & Save {discount || 15}%
            </Button>
          )}

          <Button onClick={handleBooking} disabled={loading} className="w-full" size="lg">
            {loading ? "Processing..." : "Confirm Booking"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
