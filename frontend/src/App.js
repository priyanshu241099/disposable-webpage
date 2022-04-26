import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import Main from "./components/main";
import User from "./components/user";
import AdminProfile from "./components/admin/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin">
          <Route element={<AdminProfile />} path="profile" />
        </Route>
        <Route element={<Main />} path="main"></Route>
        <Route element={<User />} path="user"></Route>

        {/* <Route element={<Login />} path="/login"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;