import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function AuthForm() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [activeTab, setActiveTab] = useState('login');

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
  if (token) {
    return (
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Welcome, {user?.name || 'User'}!
        </h2>

        <p className="mb-4">You are logged in.</p>

        <button 
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    );
  }

  return(
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6">
      <div className="flex mb-6 border-b">

        <button
          className={`flex-1 py-2 text-center cursor-pointer 
          ${activeTab === 'login'
            ? 'border-b-2 border-blue-500 font-semibold text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('login')}
        >
        Login </button>

        <button
          className={`flex-1 py-2 text-center cursor-pointer
          ${activeTab === 'register'
            ? 'border-b-2 border-blue-500 font-semibold text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
          } `}
          onClick={() => setActiveTab('register')}
        >
        Register
        </button>
      </div>

      {activeTab === 'login' ? (
        <LoginForm onSuccess={handleLoginSuccess} />
      ) : (
        <RegisterForm />
      )}
    </div>
  );
}


export default AuthForm;