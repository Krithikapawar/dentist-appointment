import { useEffect, useState } from "react";
import axios from "axios";
import DentistCard from "./DentistCard";
import Carousel from "./Carousel";
function DentistList() {
  const [dentists, setDentists] = useState([]);
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const dentistsPerPage = 6;

  useEffect(() => {
    axios
      .get("https://dentist-appointment-26n2.onrender.com/api/dentists")
      .then((res) => setDentists(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔍 Filter dentists
  const filteredDentists = dentists.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const indexOfLast = currentPage * dentistsPerPage;
  const indexOfFirst = indexOfLast - dentistsPerPage;
  const currentDentists = filteredDentists.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(filteredDentists.length / dentistsPerPage);
  return (
    
    <div>
              <Carousel />

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Available Dentists
      </h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search dentist by name..."
        className="w-full mb-6 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page on search
        }}
      />

      {/* 🧩 Grid */}
      {currentDentists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDentists.map((d) => (
            <DentistCard key={d._id} dentist={d} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No dentists found</p>
      )}

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-4">

          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-gray-600 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>
      )}
    </div>
  );
}

export default DentistList;