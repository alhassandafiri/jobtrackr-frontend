import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AuthProvider } from "./components/AuthContext/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AuthForm from "./components/AuthForm/AuthForm"
import Logo from "./components/Logo/Logo"

function App() {
  return (
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

export default App
  