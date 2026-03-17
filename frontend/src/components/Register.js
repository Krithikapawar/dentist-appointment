import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user"
  });

  const handleRegister = async () => {
    await axios.post(
      "https://dentist-appointment-26n2.onrender.com/api/auth/register",
      form
    );

    alert("Registered successfully!");
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>

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

      <select
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleRegister}
        className="w-full bg-green-500 text-white py-2 rounded"
      >
        Register
      </button>
      <p className="mt-3 text-sm">
  Already have an account?{" "}
  <a href="/login" className="text-blue-500">Login</a>
</p>
    </div>
  );
}

export default Register;