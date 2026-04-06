import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <p className="text-lg text-neutral-400 mb-6">Page not found</p>
        <a href="/" className="text-sm text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
