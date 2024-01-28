import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OptimizedRouteProvider } from "./contexts/optimized-route";
import ListClients from "./components/ListClients";
import EditClient from "./components/EditClient";
import CreateCliente from "./components/CreateCliente";
import { ClientProvider } from "./contexts/client";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <Router>
      <OptimizedRouteProvider>
        <ClientProvider>
          <Routes>
            <Route path="/" element={<ListClients />} />
            <Route path="/edit/:id" element={<EditClient />} />
            <Route path="/create" element={<CreateCliente />} />
          </Routes>
        </ClientProvider>
      </OptimizedRouteProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
