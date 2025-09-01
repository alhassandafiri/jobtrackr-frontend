import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

export default function ProtectedRoute({ children }) {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/auth" replace />
    }

    return children;
}