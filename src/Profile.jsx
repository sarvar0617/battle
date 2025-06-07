import React, { useEffect, useState } from "react";
import { Copy, Trash2 } from "lucide-react";
import { api } from "./api/Api";
const Profile = () => {
  const [profile, setProfile] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/auth");
        setProfile(res.data);
        console.log("User profile:", res.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-400 mx-auto mt-5 bg-white shadow  h-100 rounded-xl">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-3xl ">Your Profile</h1>
        <div className="flex gap-5 ">
          <button className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded-md">
            <Copy /> Copy Username
          </button>
          <button className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-md">
            <Trash2 /> Delete Account
          </button>
        </div>
      </div>
      <div className="p-5 flex gap-5 items-center">
        <div className="border w-50 h-50 flex items-center  justify-center text-8xl  border-[#00000059] rounded-[50%]">
          {profile.name?.[0]?.toString().toUpperCase()}
        </div>
        <div className=" w-55 h-25 relative">
          <h1 className="text-4xl font-semibold">{profile.name}</h1>
          <p className="text-[#00000083]">{profile.username}</p>
          <div className="absolute top-0 right-0 font-semibold text-[18px] bg-green-500 inline-block text-white px-3 py-1 rounded-md   text-center">
            {profile?.status}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
