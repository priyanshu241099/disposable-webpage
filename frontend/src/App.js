import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import User from "./components/user";
import AdminProfile from "./components/admin/profile";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import ManageAsset from "./components/user/manageAsset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          
        
        <Route element={<Login />} path ="login"></Route>
        <Route element={<Signup />} path="signup" />


        <Route element={<User/>} path="user">
        <Route element={<ManageAsset/>} path="manageasset"/>
        </Route>
        
        

        {/* <Route element={<Login />} path="/login"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;