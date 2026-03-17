import { useState } from "react";
import BookAppointment from "./BookAppointment";

function DentistCard({ dentist }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white/90 backdrop-blur rounded-2xl p-5 shadow-md hover:shadow-xl transition border border-gray-200">

      {/* Image */}
      <div className="flex justify-center">
        <div className="h-48 bg-gray-100 flex items-start justify-center overflow-hidden rounded-t-xl">
  <img
    src={
      dentist.photo.startsWith("http")
        ? dentist.photo
        : `https://dentist-appointment-26n2.onrender.com${dentist.photo}`
    }
    alt="dentist"
    className="h-full object-contain"
  />
</div>
      </div>

      {/* Info */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {dentist.name}
        </h2>

        <p className="text-blue-500 text-sm font-medium">
          {dentist.qualification}
        </p>

        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p> {dentist.experience} yrs experience</p>
          <p> {dentist.clinicName}</p>
          <p>📍 {dentist.location}</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        Book Appointment
      </button>

      {showForm && <BookAppointment dentist={dentist} />}
    </div>
  );
}

export default DentistCard;