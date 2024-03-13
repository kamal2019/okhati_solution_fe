import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginRegister } from "../../components/LoginRegisterForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import toast from "react-hot-toast";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async () => {
        const body = { email, password };
        await login(body)
            .then((response: any) => {
                if (response?.success) {
                    toast.success(response?.message);
                    localStorage.setItem('token', response?.token)
                    navigate("/")
                } else {
                    toast.error(response?.message)
                }
            })
    }
    return (
        <div className="login-page">
            <h2 className="login-page-header">Login</h2>
            <LoginRegister
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                type='login'
            />
        </div>
    )
}
export default LoginPage;