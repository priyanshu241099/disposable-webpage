import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import User from "./components/user";
import AdminProfile from "./components/admin/profile";
import login from "./components/main/login";
import signup from "./components/main/signup"
import Managewebpage from "./components/user/managewebpage";


function App() {
  return (


    <BrowserRouter>
      <Routes>
        
          
        
        <Route element={<login />} path ="login"></Route>
        <Route element={<signup />} path="signup" />
        
        <Route element={<User />} path="user" />
        <Route element={<Managewebpage />} path="managewebpage" />
        

        {/* <Route element={<Login />} path="/login"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;