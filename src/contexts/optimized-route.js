import { createContext, useEffect, useState } from "react";
import ClienteService from "../services/ClientService";

export const OptimizedRouteContext = createContext();

export const OptimizedRouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateRoutes = () => {
    setLoading(true);
    ClienteService.optimizedRoute()
      .then((results) => setRoutes(results))
      .finally(() => setLoading(false));
  }
    
  return (
    <OptimizedRouteContext.Provider
      value={{ loading, routes, updateRoutes }}
    >
      {children}
    </OptimizedRouteContext.Provider>
  );
};
