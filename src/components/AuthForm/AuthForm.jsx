import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function AuthForm() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  function handleLoginSuccess(data) {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  }

  async function handleLogout() {
    try {
        const res = fetch(`${API_BASE}/logout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            },
        });

        if (!res.ok) {
            console.error('Logout failed:'. res.status);
        }
    } catch (err) {
        console.error('Logout error:', err); 
    } finally {
        setUser(null);
        setToken(null);

        localStorage.removeItem('token');
    }
  }

  return token ? (
    <div>
      <h2>Welcome, {user?.name}!</h2>
      <p>You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <LoginForm onSuccess={handleLoginSuccess} />
  );
}


export default AuthForm;