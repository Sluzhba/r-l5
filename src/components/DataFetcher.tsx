import React, { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function ApiComponent() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        const res = await axios.get<User>(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(res.data);
      } catch {
        setError("Помилка завантаження даних");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ maxWidth: "350px", margin: "2rem auto" }}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && user && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #bbb",
            borderRadius: "6px",
            background: "#fff",
          }}
        >
          <h3>Дані користувача:</h3>
          <p>
            <strong>Ім'я:</strong> {user.name}
            <br />
            <strong>Username:</strong> {user.username}
            <br />
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default ApiComponent;