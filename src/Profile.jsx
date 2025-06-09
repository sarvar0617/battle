import React, { useEffect, useState } from "react";
import { Copy, Trash2 } from "lucide-react";
import { api } from "./api/Api";
import { Bounce, ToastContainer, toast } from "react-toastify";
const Profile = () => {
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(true);
  const handleCopy = () => {
    navigator.clipboard.writeText(profile.username);
    console.log(profile.username);
    toast.success("Username is copied", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const res = await api.get("/auth");
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading || !profile)
    return <h1 className="text-white text-5xl font-semibold">Loading...</h1>;
  return (
    <div className="w-400 mx-auto mt-5 bg-white shadow  h-100 rounded-xl">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-3xl ">Your Profile</h1>
        <div className="flex gap-5 ">
          <div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded-md"
            >
              <Copy /> Copy Username
            </button>
            <ToastContainer />
          </div>
          <button className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-md">
            <Trash2 /> Delete Account
          </button>
        </div>
      </div>
      <div className="p-5 flex gap-5 items-center">
        <div className="border w-50 h-50 flex items-center  justify-center text-8xl bg-amber-500 text-white border-[#0000000f] rounded-[50%]">
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
