import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { countries } from "@/data/countries";
import { MessageSquare, Star } from "lucide-react";

const Reviews = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Here you would typically send the data to your backend
    console.log({
      type: formData.get("type"),
      country: formData.get("country"),
      targetName: formData.get("targetName"),
      rating,
      comment: formData.get("comment"),
      author: formData.get("author"),
    });

    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your experience. Your review will help other travelers.",
    });

    e.currentTarget.reset();
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            Write a Review
          </h1>
          <p className="text-muted-foreground text-lg">
            Share your experience to help fellow Georgian travelers
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="type">Review Type</Label>
                <Select name="type" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select what you're reviewing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company">Travel Company</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select name="country" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country.id} value={country.id}>
                        {country.flag} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetName">Company or Hotel Name</Label>
                <Input 
                  id="targetName" 
                  name="targetName" 
                  placeholder="Enter the name"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating === 0 && (
                  <p className="text-sm text-destructive">Please select a rating</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Your Review</Label>
                <Textarea 
                  id="comment" 
                  name="comment" 
                  placeholder="Share your experience... What did you like? What could be improved?"
                  className="min-h-[150px]"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Your Name</Label>
                <Input 
                  id="author" 
                  name="author" 
                  placeholder="Your name (optional)"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={rating === 0}
              >
                Submit Review
              </Button>
            </form>
          </Card>

          <Card className="mt-8 p-6 bg-muted/50">
            <h3 className="font-semibold mb-3">📝 Review Guidelines</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Be honest and specific about your experience</li>
              <li>• Include both positive and negative aspects</li>
              <li>• Mention specific details (dates, services, staff)</li>
              <li>• Be respectful and constructive in criticism</li>
              <li>• Your review helps the Georgian travel community</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
