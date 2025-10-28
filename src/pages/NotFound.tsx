import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-8xl md:text-9xl font-black glow-text text-primary">404</h1>
        <p className="mb-8 text-2xl md:text-3xl text-muted-foreground">Page not found</p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => window.location.href = "/"}
          className="gap-2"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
