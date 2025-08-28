import LoginForm from "../Login/LoginForm"
import { useState } from "react";


function AuthForm () {

    function handleLoginSuccess(data) {
        setUser(data.user);
        setToken(data.token);

        localStorage.setItem('token', data.token);
    }


    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [jobs, setJobs] = useState([]);

    return token ? (
        <div>
            <h2>Welcome, {user?.name}!</h2>
            <p>You are logged in.</p>
            <button>Logout</button>
        </div>
    ) : (
        <LoginForm onSuccess={handleLoginSuccess} />
    );
}

export default AuthForm;