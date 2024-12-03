import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Subscriptions from "./components/Subscriptions";

function App() {
  return (
    <Router>
      <div>
        {/* قائمة التنقل */}
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/subscriptions">Subscriptions</Link>
            </li>
          </ul>
        </nav>

        {/* تعريف المسارات */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
