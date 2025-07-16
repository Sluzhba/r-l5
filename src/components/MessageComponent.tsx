import React, { useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

export function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Іван Петренко",
        email: "ivan.petrenko@example.com",
      });
    }, 1500);
  });
}

// Функція, яка повертає помилку
export function fetchUserWithError(): Promise<User> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Не вдалося отримати дані користувача"));
    }, 1500);
  });
}

interface MessageComponentProps {
  promise: Promise<User>;
}

export default function MessageComponent({ promise }: MessageComponentProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    promise
      .then((data) => {
        if (isMounted) {
          setUser(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setUser(null);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [promise]);

  if (error) {
    return (
      <div
        style={{
          margin: "2rem auto",
          maxWidth: 350,
          padding: "1rem",
          border: "1px solid #bbb",
          borderRadius: "6px",
          background: "#f9f9f9",
          color: "red",
        }}
      >
        <h3>Помилка:</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          margin: "2rem auto",
          maxWidth: 350,
          padding: "1rem",
          border: "1px solid #bbb",
          borderRadius: "6px",
          background: "#f9f9f9",
        }}
      >
        <p>Завантаження...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: "2rem auto",
        maxWidth: 350,
        padding: "1rem",
        border: "1px solid #bbb",
        borderRadius: "6px",
        background: "#f9f9f9",
      }}
    >
      <h3>Дані користувача:</h3>
      <ul>
        <li>
          <strong>ID:</strong> {user.id}
        </li>
        <li>
          <strong>Ім'я:</strong> {user.name}
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
      </ul>
    </div>
  );
}