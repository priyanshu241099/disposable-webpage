import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import User from "./components/user";
import Managewebpage from "./components/user/managewebpage";

import Login from "./components/main/login";
import Signup from "./components/main/signup";
import ManageAsset from "./components/user/manageAsset";
import AddWebpage from "./components/user/addWebpage";
import { Navigate } from "react-router-dom";
import Home from "./components/main/home";
import Pricing from "./components/main/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<User />} path="user">
          <Route element={<ManageAsset />} path="manageasset" />
          <Route element={<AddWebpage />} path="addwebpage" />
        </Route>
        <Route element={<User />} path="user" />
        <Route element={<Managewebpage />} path="managewebpage" />

        <Route element={<Main />} path="main">
          <Route element={<Login />} path="login"></Route>
          <Route element={<Signup />} path="signup" />
          <Route element={<Home />} path="home" />
          <Route element={<Pricing />} path="pricing" />
        </Route>
        <Route element={<Navigate to="/main/home"></Navigate>} path="" />
        {/* <Route element={<Navigate to="/404"></Navigate>} path="*" /> */}

        {/* <Route element={<Login />} path="/login"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
