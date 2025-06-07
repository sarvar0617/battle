import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../api/Api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState(null);
  const [error, setError] = useState(null); // Xatolik uchun state
  const { auth } = useParams();
  const navigate = useNavigate();
  // Agar URL parametri auth bo‘lsa, avtomatik ma’lumot olish uchun useEffect
  useEffect(() => {
    if (!auth) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/${auth}`);
        setUserDetail(res.data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setError("Ma'lumot olishda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [auth]);

  // Login tugmasi bosilganda API ga so‘rov yuborish
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/auth", { username, password });
      setUserDetail(res.data);
      localStorage.setItem("token", res.data.token);
      console.log("Login muvaffaqiyatli:", res.data);
      navigate("/");
    } catch (error) {
      console.error("Login xatolik:", error.response?.data || error.message);
      setError("Login muvaffaqiyatsiz, iltimos ma'lumotlarni tekshiring");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-5 bg-white px-2 h-100"
      >
        <h1 className="text-3xl">Welcome to back!</h1>
        <div className="flex flex-col gap-5">
          <label htmlFor="username" className="flex flex-col text-xl">
            Username
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="min-w-[330px] h-[50px] outline-none rounded-sm bg-[#F1F1F1] pl-2"
              placeholder="Foydalanuvchi nomingizni kiriting"
              autoComplete="username"
              required
            />
          </label>
          <label htmlFor="password" className="flex flex-col text-xl">
            Password
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="min-w-[330px] h-[50px] outline-none rounded-sm bg-[#F1F1F1] pl-2"
              placeholder="Parolingizni kiriting"
              autoComplete="current-password"
              required
            />
          </label>
        </div>

        {error && <p className="text-red-600 text-center text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`bg-[#27AE60] w-[330px] text-xl cursor-pointer hover:bg-[#32965f] text-white h-[50px] rounded-3xl ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Kuting..." : "Log In"}
        </button>
        <p>
          <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
