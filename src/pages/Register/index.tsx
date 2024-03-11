import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginRegister } from "../../components/LoginRegisterForm";

const RegisterPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = () => {
        console.log(email, password)
    }
    return (
        <div className="login-page">
            <h2 className="login-page-header">Register</h2>
            <LoginRegister
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                type='register'
            />
        </div>
    )
}
export default RegisterPage;