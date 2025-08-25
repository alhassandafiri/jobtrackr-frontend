import { useState } from "react";


function Login ({onSuccess}) {

    const [form, setForm] = useState({ email: '', password: '', remember: false});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function updateField(key, value) {
        setForm(prev => ({ ...prev, [key]: value }));
    }

    return(
        <div className="max-w-md w-full bg-white shadow-x1 rounded-2x1 p-6">
            <h1 className="text-2x1 font-semibold mb-6">
                Welcome Back
            </h1>

            <form className="space-y-4">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => updateField('email', e.target.value)}
                        required
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;