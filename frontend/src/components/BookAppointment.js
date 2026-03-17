import { useState } from "react";
import axios from "axios";

function BookAppointment({ dentist }) {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    appointmentDate: ""
  });

  const handleSubmit = async () => {
  if (!form.patientName.trim()) {
    alert("Name required");
    return;
  }

  if (!form.age || form.age <= 0) {
    alert("Valid age required");
    return;
  }

  if (!form.gender) {
    alert("Select gender");
    return;
  }

  if (!form.appointmentDate) {
    alert("Select date");
    return;
  }

  await axios.post("https://dentist-appointment-26n2.onrender.com/api/appointments", {
    ...form,
    dentistName: dentist.name,
    clinicName: dentist.clinicName,
    status: "Booked"
  });

  alert("Appointment booked!");
};

  return (
    <div className="mt-4 space-y-3 border-t pt-4">

      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Patient Name"
        onChange={e => setForm({...form, patientName: e.target.value})}
      />

      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Age"
        onChange={e => setForm({...form, age: e.target.value})}
      />

      <select
        className="w-full border rounded-lg px-3 py-2"
        onChange={e => setForm({...form, gender: e.target.value})}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input
        type="date"
        className="w-full border rounded-lg px-3 py-2"
        onChange={e => setForm({...form, appointmentDate: e.target.value})}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default BookAppointment;