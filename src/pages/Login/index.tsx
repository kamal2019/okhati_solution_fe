import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginRegister } from "../../components/LoginRegisterForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = () => {
        console.log(email, password)
        navigate("/home")
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