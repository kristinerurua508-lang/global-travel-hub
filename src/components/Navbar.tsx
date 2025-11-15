import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Plane, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link to="/" className="text-foreground hover:text-primary transition-colors">
        Home
      </Link>
      <Link to="/insurance" className="text-foreground hover:text-primary transition-colors">
        Insurance
      </Link>
      <Link to="/currency" className="text-foreground hover:text-primary transition-colors">
        Currency
      </Link>
      <Link to="/internet" className="text-foreground hover:text-primary transition-colors">
        Internet
      </Link>
      <Link to="/companies" className="text-foreground hover:text-primary transition-colors">
        Companies
      </Link>
      <Link to="/hotels" className="text-foreground hover:text-primary transition-colors">
        Hotels
      </Link>
      <Link to="/laws" className="text-foreground hover:text-primary transition-colors">
        Laws
      </Link>
      <Link to="/embassy" className="text-foreground hover:text-primary transition-colors">
        Embassy
      </Link>
      <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">
        Reviews
      </Link>
    </>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Georgian Travel Guide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
            <Link to="/auth">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <NavLinks />
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="default" className="w-full">
                      Login
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
