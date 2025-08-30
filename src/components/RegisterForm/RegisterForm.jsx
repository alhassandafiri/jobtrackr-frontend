import { useState } from "react";


function RegisterForm () {
    const [form, setForm] = useState({ email: '', password: '', remember: false});

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
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => updateField('email', e.target.value)}
                    required
                    />
                </div>

                <div className="flex items-center justify-between">
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

                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
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
                        onChange={e => updateField('checkbox', e.target.value)}
                    />
                    I agree to the <a href="#" className="text-sm text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-sm text-blue-600 hover:underline">Privacy Policy</a>    
                </label>

            </form>

        </div>
    )
}

export default RegisterForm;