// CreateGroupModal.jsx
import React, { useState } from "react";
import { api } from "../api/Api";
import { toast, Bounce } from "react-toastify";

const CreateGroupModal = ({ visible, onClose, onCreate }) => {
  const [groupName, setGroupName] = useState("");
  const [password, setPassword] = useState("");

  if (!visible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/groups", {
        name: groupName,
        password: password,
      });

      onCreate(res.data); // yangi guruhni ota komponentga yuboradi

      toast.success("Group created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });

      setGroupName("");
      setPassword("");
      onClose(); // modalni yopadi
    } catch (error) {
      toast.error("Group creation failed", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="rounded bg-opacity-40 flex items-center justify-center">
      <div className="z-51 absolute top-25 left-45 border border-[#00000041] bg-white p-6 rounded-lg w-[350px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Group name and password</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full border rounded px-3 py-2 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 outline-none"
            required
          />
          <div className="flex justify-between pt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupModal;
