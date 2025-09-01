import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./components/AuthContext/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AuthForm from "./components/AuthForm/AuthForm"
import Logo from "./components/Logo/Logo"
import Kanban from "./components/Kanban/Kanban"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/" element={ <ProtectedRoute> <Kanban /> </ProtectedRoute> } />

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

