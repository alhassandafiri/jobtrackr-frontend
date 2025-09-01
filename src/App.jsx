import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./components/AuthContext/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AuthPage from "./components/AuthPage/AuthPage"
import Logo from "./components/Logo/Logo"
import Kanban from "./components/Kanban/Kanban"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={ <ProtectedRoute> <Kanban /> </ProtectedRoute> } />

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

