import React, { useState } from "react";
import { User, Users, Plus } from "lucide-react";
import CreateGroupModal from "./CreateGroupModal";

const Sidebar = () => {
  const [group, setGroup] = useState("");

  return (
    <div className="w-56 h-screen overflow-hidden  shadow bg-white p-4 flex flex-col gap-4">
      {/* Profile */}
      <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
        <User className="h-5 w-5 text-blue-600" />
        <span>Profile</span>
      </div>

      {/* Groups title */}
      <div className="flex items-center gap-2 px-3 py-2 text-gray-700 font-medium">
        <Users className="h-5 w-5 text-blue-600" />
        <span>Groups</span>
      </div>

      {/* Create Group */}
      <div>
        <button
          onClick={() => setGroup(true)}
          className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-gray-100 rounded cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>Create Group</span>
        </button>
        <CreateGroupModal
          visible={group}
          onClose={() => setGroup(false)}
          onCreate={(data) => {
            console.log("Yangi group:", data);
            setGroup(false); // modal yopilsin
          }}
        />
      </div>

      {/* Group item (e.g., 'test guruh') */}
      <div className="px-3 py-2 bg-gray-200 rounded cursor-pointer">
        test guruh
      </div>
    </div>
  );
};

export default Sidebar;
