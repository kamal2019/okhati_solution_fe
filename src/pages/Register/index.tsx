import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginRegister } from "../../components/LoginRegisterForm";
import { signUp } from "../../api/auth";
import toast from "react-hot-toast";
import { useNavigate, useNavigation } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async () => {
        const body = { email: email, password: password };
        await signUp(body)
            .then((response: any) => {
                if (response?.success) {
                    toast.success(response?.message);
                    navigate("/login")
                } else {
                    toast.error(response?.message)
                }
                console.log(response, 'response')
            })
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