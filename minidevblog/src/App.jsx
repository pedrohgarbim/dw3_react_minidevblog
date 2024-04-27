import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { auth } = useAuthentication();
  const [user, setUser] = useState(null);
  const loadingUser = user === undefined;
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
  if (loadingUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login"element={<Login /> }></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="*" element={<h1>Not Found</h1>}></Route>
              <Route path="/posts/create" element={<CreatePost />}></Route>
              <Route path="/dashboard"element={<Dashboard />}></Route>
            </Routes>
          </div>
        </Router>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
