import { Link, useNavigate } from "react-router-dom";
import { Menu, LogOut, User, Crown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import phoenixLogo from "@/assets/phoenix-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
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
          <Link to="/" className="flex items-center space-x-3">
            <img src={phoenixLogo} alt="Phoenix Travel" className="h-10 w-10" />
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-phoenix-gradient">
              Phoenix Travel
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <Link to="/premium">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/premium")}>
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Premium</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button>Login</Button>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  <NavLinks />
                  <Link to="/premium">
                    <Button variant="outline" className="w-full border-accent text-accent">
                      <Crown className="w-4 h-4 mr-2" />
                      Premium
                    </Button>
                  </Link>
                  {user ? (
                    <Button onClick={() => signOut()} className="w-full" variant="outline">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  ) : (
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Login</Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
