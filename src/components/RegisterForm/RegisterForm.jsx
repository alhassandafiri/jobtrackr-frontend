import { useState } from "react";


function RegisterForm () {
    const [form, setForm] = useState({ email: '', password: '', remember: false});

    function updateField(key, value) {
        setForm(prev => ({...prev, [key]: value}))
    }

    return(
        <div>
            <h1>
                Create an account
            </h1>

            <form>
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => updateField('email', e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={e => updateField('password', e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={e => updateField('password', e.target.value)}
                    required
                    />
                </div>

                <label>
                    <input
                        type="checkbox"
                        checked={form.remember}
                        onChange={e => updateField('checkbox', e.target.value)}
                    />
                    I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>    
                </label>

            </form>

        </div>
    )
}

export default RegisterForm;