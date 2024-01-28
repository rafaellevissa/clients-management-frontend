import { createContext, useState } from "react";
import ClienteService from "../services/ClientService";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);

  const createClient = (form) => {
    setLoading(true);
    ClienteService.create(form)
      .finally(() => setLoading(false));
  }

  const findClients = () => {
    setLoading(true);
    ClienteService.find()
      .then((results) => setClients(results))
      .finally(() => setLoading(false));
  }

  const updateClients = (results) => setClients(results);

  const putClient = (form) => {
    setLoading(true);
    ClienteService.update(form)
      .then((res) => setClient(res))
      .finally(() => setLoading(false));
  }

  const updateClient = (results) => setClient(results);

  const findClient = (id) => {
    setLoading(true);
    ClienteService.findById(id)
      .then((res) => setClient(res))
      .finally(() => setLoading(false));
  }

  const removeClient = (id) => {
    setLoading(true);
    ClienteService.remove(id)
      .then(() => findClients())
      .finally(() => setLoading(false));
  }

  return (
    <ClientContext.Provider
      value={{ loading, clients, client, findClients, updateClient, updateClients, removeClient, findClient, putClient, createClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};
