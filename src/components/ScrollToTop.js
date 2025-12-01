// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force scroll to top
    window.scrollTo(0, 0);
    
    // 2. Optional: This prevents the browser from remembering the scroll position on refresh
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
  }, [pathname]); // Runs every time the route (pathname) changes

  return null; // This component doesn't render anything visually
}

export default ScrollToTop;