// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// "https://capestonebackend.onrender.com"
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const getUser = () => {
      //fetch("http://localhost:5000/auth/login/success", {
      fetch("http://capestonebackend.onrender.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  // console.log(user);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
