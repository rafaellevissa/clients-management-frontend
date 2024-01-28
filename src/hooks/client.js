import { useContext } from "react";
import { ClientContext } from "../contexts/client";

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error(
      "useClient must be used within a ClientProvider"
    );
  }
  return context;
};
