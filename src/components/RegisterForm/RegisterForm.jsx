import { useState } from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function RegisterForm ({onSuccess}) {
    const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '', remember: false});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function updateField(key, value) {
        setForm(prev => ({...prev, [key]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);

        if (!form.name || !form.email || !form.password || !form.password_confirmation) {
            setError('Please make sure to fill in all input boxes.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/register`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    password_confirmation: form.password_confirmation,
                }),
            });

            if (!res.ok) {
                let msg = 'Registration failed';
                try {
                    const data = await res.json();
                    msg = data.message || msg;
                } catch {
                    //continue regardless of error
                }
                throw new Error(msg);
            }

            const data = await res.json();
            console.log("Register response:", data);

            localStorage.setItem("token", data.token);
    
            onSuccess?.({ user:data.user, token: data.token});

        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
  <div className="max-w-md w-full bg-white rounded-2xl p-6">
    <h1 className="text-2xl font-semibold mb-6">
      Create an account
    </h1>

    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring focus:ring-sky-200"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring focus:ring-sky-200"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring focus:ring-sky-200"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => updateField("password", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring focus:ring-sky-200"
          placeholder="••••••••"
          value={form.password_confirmation}
          onChange={(e) =>
            updateField("password_confirmation", e.target.value)
          }
          required
        />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.remember}
          onChange={(e) => updateField("remember", e.target.checked)}
        />
        I agree to the
        <a href="#" className="text-sm text-sky-600 hover:underline">
        Terms
        </a> 
        and
        <a href="#" className="text-sm text-sky-600 hover:underline">
        Privacy Policy
        </a>
      </label>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-sky-600 text-white font-medium py-2.5 hover:bg-sky-700 transition disabled:opacity-60"
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-500">Or continue with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border py-2 hover:bg-gray-50 transition"
        >
          <FaGoogle /> Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border py-2 hover:bg-gray-50 transition"
        >
          <FaLinkedin /> LinkedIn
        </button>
      </div>
    </form>
  </div>
);

}

export default RegisterForm;