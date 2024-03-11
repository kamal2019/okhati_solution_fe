import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <div>
            <h2>Welcome</h2>
            <p>Please login to continue</p>
            <Button variant="outlined" onClick={() => handleLogin()}>Login</Button>
        </div>
    )
}

export default Home