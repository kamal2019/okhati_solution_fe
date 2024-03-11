import { Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"

interface ILoginRegisterProps {
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: () => void,
    type?: string
}
export const LoginRegister = ({ email, setEmail, handleSubmit, setPassword, password, type }: ILoginRegisterProps) => {
    return (
        <div style={{ background: "#ffffff", borderRadius: "20px" }}>
            <div className="login-page-box">
                <TextField placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                <TextField placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <Button variant="contained" onClick={() => handleSubmit()} type="submit">Submit</Button>
                </div>
                {type === 'login' && <span className="display-flex-jc-center">Doesn't have account yet? <Link to={"/register"}>Register</Link></span>}
                {type === 'register' && <span className="display-flex-jc-center">Back to ? <Link to={"/login"}>Login</Link></span>}
            </div>
        </div>
    )
}