import { useState } from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function LoginForm ({onSuccess}) {

    const [form, setForm] = useState({ email: '', password: '', remember: false});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function updateField(key, value) {
        setForm(prev => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
    
        if (!form.email || !form.password) {
            setError('Please enter your email or password.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            if (!res.ok) {
                let msg = 'Login failed';
                try {
                    const data = await res.json();
                    msg = data.message || msg;
                } catch {
                    //continue regardless of error
                }
                throw new Error(msg);
            }

            const data = await res.json();

            localStorage.setItem("token", data.token);

            onSuccess?.(data);

        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }


    return(
        <div className="max-w-md w-full bg-white rounded-2xl p-6">
            <h1 className="text-2xl font-semibold mb-6">
                Welcome Back
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
                
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => updateField('email', e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>

                <div>
                    <input
                        type="password"
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={e => updateField('password', e.target.value)}
                        required
                    />
                </div>

                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={form.remember}
                        onChange={e => updateField('remember', e.target.checked)}
                    />
                    Remember me?
                </label>

                {error && (
                    <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 text-white font-medium py-2.5 disabled:opacity-60"
                >
                    {loading ? 'Logging in...' : 'Login'}
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
    )
}

export default LoginForm;