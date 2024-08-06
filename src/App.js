import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Login />
              <div>
                <span>계정이 없으신가요? </span>
                <Link to="/signup">회원가입</Link>
              </div>
            </div>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
