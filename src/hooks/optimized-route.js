import { useContext } from "react";
import { OptimizedRouteContext } from "../contexts/optimized-route";

export const useOptimizedRoute = () => {
  const context = useContext(OptimizedRouteContext);
  if (!context) {
    throw new Error(
      "useOptimizedRoute must be used within a OptimizedRouteProvider"
    );
  }
  return context;
};
