import React, { useEffect, useState } from "react";
import { User, Users, Plus, Group } from "lucide-react";
import CreateGroupModal from "./CreateGroupModal";
import { api } from "../api/Api";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openGroup, setOpenGroup] = useState(false);
  const [groupDetail, setGroupDetail] = useState([]);

  const fetchGroups = async () => {
    try {
      const res = await api.get("/groups");
      setGroupDetail(res.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className="w-56 h-screen shadow bg-white p-4 flex flex-col gap-4">
      {/* Profile */}
      <button>
        <Link
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
          to="/"
        >
          <User className="h-5 w-5 text-blue-600" />
          <span>Profile</span>
        </Link>
      </button>

      {/* Groups title */}
      <div className="flex items-center gap-2 px-3 py-2 text-gray-700 font-medium">
        <Users className="h-5 w-5 text-blue-600" />
        <span>Groups</span>
      </div>

      {/* Create Group */}
      <div>
        <button
          onClick={() => setOpenGroup(true)}
          className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-gray-100 rounded cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>Create Group</span>
        </button>

        {/* Modalni ulaymiz */}
        <CreateGroupModal
          visible={openGroup}
          onClose={() => setOpenGroup(false)}
          onCreate={() => {
            fetchGroups(); // qayta yuklash
            setOpenGroup(false); // modalni yopish
          }}
        />
      </div>

      {/* Guruhlar ro'yxati */}
      <div className="space-y-2">
        {groupDetail.map((group, index) => (
          <Link
            key={index}
            to={`/group/${group._id}`}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            <Group className="h-5 w-5 text-blue-600" />
            <span>{group.name} </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
