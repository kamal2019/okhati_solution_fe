import { Button, TextField } from "@mui/material"
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const [openCompanyForm, setOpenCompanyform] = useState<boolean>(false);
    const [openingTime, setOpeningTime] = useState<{ day: string, time?: string | any }[]>([])
    const [closingTime, setClosingTime] = useState<{ day: string, time: string | any }[]>([])
    const handleLogin = () => {
        navigate("/login")
    }
    const handleAddCompany = () => {
        setOpenCompanyform(true)
    }
    const handleChangeTime = (day: string, value: string | any, type: string) => {
        const setValue = type === 'openingTime' ? setOpeningTime : setClosingTime;
        
        setValue((previousValue: string | any) => [
            ...previousValue,
            { day: "default", time: new Date(value) },
        ])
    }
    const handleDefaultTime = () => {

    }
    console.log(openingTime, 'kamal')
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
        <div className="home-page">
            {/* <h2>Welcome</h2>
            <p>Please login to continue</p>
            <Button variant="outlined" onClick={() => handleLogin()}>Login</Button> */}
            <h2>Company</h2>
            <Button onClick={() => handleAddCompany()}>Add</Button>
            {openCompanyForm &&
                <div className="display-flex">
                    <TextField placeholder="Enter Company Name" />
                    <div style={{ margin: "10px 0px" }}>Set To All</div>
                    <div style={{ margin: "20px 0px", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                label="Time picker"
                                value={openingTime[0]?.time}
                                onChange={(newValue) => handleChangeTime('allDay', newValue, 'openingTime')}
                            />
                            <TimePicker label="Time picker" value={closingTime[0]?.time}
                                onChange={(newValue) => handleChangeTime('allDay', newValue, 'closingTime')
                                }
                            />
                        </LocalizationProvider>
                        <Button variant="outlined" onClick={() => handleDefaultTime()}>Set Default</Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {
                            days?.map((day, key) => (
                                <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                                    <span>{day}</span>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker />
                                        <TimePicker label="Time picker" value={openingTime[key + 2]?.time} />
                                        <TimePicker label="Time picker" value={closingTime[key + 2]?.time} />
                                    </LocalizationProvider>
                                </div>
                            ))
                        }
                    </div>

                </div>}
        </div>
    )
}

export default Home