// GroupSection.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../api/Api";

const Group = () => {
  const { id } = useParams();
  const [myGroup, setMyGroup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/groups/${id}`);
        console.log(res.data);
        setMyGroup(res.data);
      } catch (error) {
        console.error("❌ Error fetching group:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-cover bg-center p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white mb-6">ewds</h1>

        {/* Sections Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Items Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-180 w-full md:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Items</h2>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  0
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Title"
                className="flex-1 px-3 py-2 border rounded-lg"
              />
              <button className="bg-blue-500 p-2 rounded-lg text-white">
                <Plus size={18} />
              </button>
            </div>
            <div className="text-gray-500 text-sm">No items yet</div>
          </div>

          {/* Members Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Members</h2>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                1
              </span>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                I
              </div>
              {console.log(myGroup)}
              <div>
                <div className="font-semibold">Ismatov</div>
                <div className="text-sm text-gray-500">Sarvar_06.17</div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Info (optional, you can enable this) */}
        {/* <div className="mt-6 ml-auto bg-white rounded-lg px-4 py-2 shadow flex items-center gap-2 w-max">
          <span className="font-semibold">Owner:</span>
          <div className="flex items-center gap-1">
            <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              I
            </div>
            <span className="text-sm">Ismatov(Sarvar_06.17)</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Group;
