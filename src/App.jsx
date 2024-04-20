import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages";
import Layout from "./layout/Layout";

// Konfigurasi routing
const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* App cuma ada 1 page ini */}
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
