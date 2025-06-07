// components/SearchModal.jsx
import React from "react";

const SearchModal = ({ results, visible, isLoading }) => {
  if (!visible) {
    return null; // Modal ko'rinmas bo'lsa, hech narsa qaytarmaymiz
  }
  return (
    <div className="absolute pt-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md max-h-[400px]  w-[600px] overflow-auto z-50">
      {results.length === 0 || isLoading ? (
        <div className="p-4 text-center text-gray-700 font-medium">
          No group found 😧
        </div>
      ) : (
        <ul className="px-2 space-y-5 " >
          {results.map((group, index) => (
            <li
              key={index}
              className="border rounded-xl border-[#00000049] px-5 py-3 hover:bg-gray-100 flex justify-between items-center"
            >
              <div>
                <div className="font-semibold flex gap-2">
                  <h1> {group.name}</h1>{" "}
                  <p className="text-white rounded px-1 bg-[#00c3ff]">
                    {`  ${group.createdAt.slice(
                      11,
                      16
                    )}, ${group.createdAt.slice(0, 10)}`}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  Created by {group.owner.name}
                </div>
              </div>
              <button className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-md">
                Join
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchModal;
