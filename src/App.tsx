import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Dashboard, Detail } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
