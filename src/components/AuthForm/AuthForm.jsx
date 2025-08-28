import LoginForm from "../Login/LoginForm"
import { useState } from "react";


function AuthForm () {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [jobs, setJobs] = useState([]);

    return(
        <>
          <LoginForm />
        </>
    )
}

export default AuthForm;