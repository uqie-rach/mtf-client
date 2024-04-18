import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterTeamPage,
  SignUpPage,
} from "./pages/";
import { Layout, Authenticated } from "./layout/Layout";

const App = () => {
  return (
    <Router basename="/">
      {/* Atur base URL sesuai dengan kebutuhan Anda */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route path="/" element={<Authenticated />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register-team" element={<RegisterTeamPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
