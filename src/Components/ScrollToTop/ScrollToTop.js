import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll à la position (0, 0), soit en haut de la page
  }, [pathname]);

  return null; // Pas besoin de rendre quoi que ce soit
}

export default ScrollToTop;
