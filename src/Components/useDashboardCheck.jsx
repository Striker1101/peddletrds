import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function useDashboardCheck() {
  const location = useLocation();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setIsDashboard(location.pathname.startsWith("/dashboard"));
  }, [location.pathname]);

  return isDashboard;
}
