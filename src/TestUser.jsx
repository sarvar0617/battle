import React, { useEffect, useState } from "react";

const TestUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users"); // yoki "/api/users"
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <div className="mt-5 mb-5">
        <h2 className="text-xl font-bold">Users:</h2>
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.username})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestUser;
