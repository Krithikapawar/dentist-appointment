import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://dentist-appointment-26n2.onrender.com/api/auth/login",
        form
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Login successful!");
      window.location.href = "/";
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        placeholder="Email"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
      <p className="mt-3 text-sm">
  Don't have an account?{" "}
  <a href="/register" className="text-blue-500">Register</a>
</p>
    </div>
  );
}

export default Login;