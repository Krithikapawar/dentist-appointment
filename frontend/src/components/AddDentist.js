import { useState } from "react";
import axios from "axios";

function AddDentist() {
  const [form, setForm] = useState({
    name: "",
    qualification: "",
    experience: "",
    clinicName: "",
    address: "",
    location: ""
  });

  const [photo, setPhoto] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    formData.append("photo", photo);

    await axios.post(
      "https://dentist-appointment-26n2.onrender.com/api/dentists",
      formData
    );

    alert("Dentist added!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8">

      <h2 className="text-xl font-bold mb-4">Add Dentist</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input placeholder="Name" className="border p-2"
          onChange={(e) => setForm({...form, name: e.target.value})}
        />

        <input placeholder="Qualification" className="border p-2"
          onChange={(e) => setForm({...form, qualification: e.target.value})}
        />

        <input placeholder="Experience" className="border p-2"
          onChange={(e) => setForm({...form, experience: e.target.value})}
        />

        <input placeholder="Clinic Name" className="border p-2"
          onChange={(e) => setForm({...form, clinicName: e.target.value})}
        />

        <input placeholder="Address" className="border p-2"
          onChange={(e) => setForm({...form, address: e.target.value})}
        />

        <input placeholder="Location" className="border p-2"
          onChange={(e) => setForm({...form, location: e.target.value})}
        />

        {/* FILE INPUT */}
        <input
          type="file"
          className="col-span-2"
          onChange={(e) => setPhoto(e.target.files[0])}
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Dentist
      </button>
    </div>
  );
}

export default AddDentist;