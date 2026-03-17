import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import DentistList from "./components/DentistList";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>

      {/* Navbar (only after login) */}
      {user && (
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-blue-600">🦷 DentCare</h1>

          <div className="space-x-4">
            <Link to="/">Home</Link>
            {user.role === "admin" && <Link to="/admin">Admin</Link>}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
              className="text-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-6">

        <Routes>

          {/* Default route */}
          <Route
            path="/"
            element={user ? <DentistList /> : <Navigate to="/login" />}
          />

          {/* Admin route */}
          <Route
            path="/admin"
            element={
              user?.role === "admin"
                ? <AdminPanel />
                : <Navigate to="/login" />
            }
          />

          {/* Auth routes */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />

        </Routes>
      </div>

    </Router>
  );
}

export default App;