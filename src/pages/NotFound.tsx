import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="terminal-page flex min-h-screen items-center justify-center px-4">
      <div className="terminal-card w-full max-w-xl text-center">
        <p className="text-sm font-semibold text-slate-400">kabir@portfolio:~$ locate route</p>
        <h1 className="mt-4 text-5xl font-extrabold text-emerald-300 sm:text-7xl">404</h1>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">Command failed: route not found.</p>
        <Link
          to="/"
          className="mt-7 inline-flex rounded-md border border-emerald-400/70 bg-emerald-500/15 px-5 py-2 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/25"
        >
          Return to about
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
