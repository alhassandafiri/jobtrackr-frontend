import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { useState } from "react";


function RegisterForm () {
    const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '', remember: false});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function updateField(key, value) {
        setForm(prev => ({...prev, [key]: value}))
    }

    return(
        <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6">
            <h1 className="text-2xl font-semibold mb-6">
                Create an account
            </h1>

            <form>
                <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                    value={form.name}
                    onChange={e => updateField('name', e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                    value={form.email}
                    onChange={e => updateField('email', e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                    type="password"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={e => updateField('password', e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                    type="password"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                    placeholder="••••••••"
                    value={form.password_confirmation}
                    onChange={e => updateField('password_confirmation', e.target.value)}
                    required
                    />
                </div>

                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={form.remember}
                        onChange={e => updateField('remember', e.target.checked)}
                    />
                    I agree to the <a href="#" className="text-sm text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-sm text-blue-600 hover:underline">Privacy Policy</a>    
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
                    {loading ? 'Registering...' : 'Register'}
                </button>

                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-500">Or continue with</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>
                
                <div>
                    <button type="button" className="rounded-lg border py-2"><FaGoogle /> Google</button>
                    <button className="rounded-lg border py-2"><FaLinkedin /> LinkedIn</button>
                </div>
            </form>

        </div>
    )
}

export default RegisterForm;