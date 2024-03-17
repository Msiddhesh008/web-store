import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticate } = useSelector((state) => state?.auth);

  const PrivateRoute = ({ children }) => {
    if (!isAuthenticate) {
      return <Navigate to="/web-store" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/web-store" element={<Login />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
