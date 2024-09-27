import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route
                path="register"
                element={<RegisterPage />}
            />
            <Route
                path="login"
                element={<LoginPage />}
            />
            <Route path="/*" 
                element={<Navigate to="login" />}
            />
        </Routes>
    )
}
