import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";

function AuthPage() {
    return(
    <>
        <div className="absolute top-6 left-6">
            <Logo />
        </div>
        
        <div className="pt-32">
            <AuthForm />
        </div>
    </>

    )
}

export default AuthPage;