const API_BASE = "http://localhost:3000/api"; 

export async function registerUser(email: string, password: string) {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Ошибка регистрации");
  }

  return res.json(); // вернёт { token: "..." }
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Ошибка входа");
  }

  return res.json();
}
