import React, { useEffect, useState } from "react";
import { Bell, RefreshCw, Settings } from "lucide-react";
import { api } from "../api/Api";
import SearchModal from "../components/SearchModal";

const Header = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(
          `/groups/search?q=${encodeURIComponent(search)}`
        );

        if (Array.isArray(res.data)) {
          setResults(res.data);
        } else {
          console.warn("Unexpected data format:", res.data);
          setResults([]);
        }
        setShowModal(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setShowModal(false);
        setResults([]);
      }
    };

    if (search.trim() !== "") {
      fetchData();
    } else {
      setShowModal(false);
      setResults([]);
    }
  }, [search]);

  return (
    <header className="flex items-center justify-between relative z-10 px-4 py-2 shadow ">
      <div className="flex items-center gap-2">
        <div className="text-blue-600 text-2xl font-bold">Logo</div>
        <button className="bg-blue-600 text-white w-20 py-1 rounded-full shadow">
          + New
        </button>
      </div>

      <div className="relative w-[600px]">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search group and join..."
          value={search}
          className="w-full border border-[#0000003a] text-[18px] rounded-md outline-none h-12 px-5 pr-10"
        />
        {search && (
          <button
            onClick={() => {
              setSearch("");
              setShowModal(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Clear search"
          >
            &#x2715;
          </button>
        )}
        <SearchModal results={results} visible={showModal} />
      </div>

      <div className="flex items-center gap-4">
        <RefreshCw className="cursor-pointer" />
        <div className="relative">
          <Bell className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
            9+
          </span>
        </div>
        <Settings className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
