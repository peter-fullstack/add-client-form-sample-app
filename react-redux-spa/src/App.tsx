import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';

import { ClientList } from "./components/ClientList";
import { AddClient } from "./components/AddClient";
import { EditClient } from "./components/EditClient";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/about" className="navbar-brand">
          P Bradley
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/clients"} className="nav-link">
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add-client"} className="nav-link">
              Add Client
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ClientList />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/company-edit/:id" element={<EditClient />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
