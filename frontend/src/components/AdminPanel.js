import { useEffect, useState } from "react";
import axios from "axios";
import AddDentist from "./AddDentist";

function AdminPanel() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("https://dentist-appointment-26n2.onrender.com/api/appointments")
      .then(res => setAppointments(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mt-12">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Dashboard
      </h2>
      <AddDentist />

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full text-sm text-left">

          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Patient</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Dentist</th>
              <th className="px-6 py-3">Clinic</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a._id} className="border-b hover:bg-gray-50">

  <td className="px-6 py-4">{a.patientName}</td>
  <td className="px-6 py-4">{a.age}</td>
  <td className="px-6 py-4">{a.gender}</td>
  <td className="px-6 py-4">
    {new Date(a.appointmentDate).toLocaleDateString()}
  </td>
  <td className="px-6 py-4">{a.dentistName}</td>
  <td className="px-6 py-4">{a.clinicName}</td>

  {/* ✅ STATUS DROPDOWN */}
  <td className="px-6 py-4">
    <select
      value={a.status}
      onChange={async (e) => {
        const newStatus = e.target.value;

        await axios.put(
          `https://dentist-appointment-26n2.onrender.com/api/appointments/${a._id}`,
          { status: newStatus }
        );

        // update UI
        setAppointments((prev) =>
          prev.map((item) =>
            item._id === a._id
              ? { ...item, status: newStatus }
              : item
          )
        );
      }}
      className={`px-2 py-1 rounded text-sm ${
        a.status === "Completed"
          ? "bg-green-100 text-green-600"
          : "bg-yellow-100 text-yellow-600"
      }`}
    >
      <option value="Booked">Booked</option>
      <option value="Completed">Completed</option>
    </select>
  </td>

</tr>
            ))}
          </tbody>

        </table>

        {/* Empty State */}
        {appointments.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No appointments yet
          </p>
        )}

      </div>
    </div>
  );
}

export default AdminPanel;