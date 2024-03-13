import { Button, TextField } from "@mui/material"
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [openCompanyForm, setOpenCompanyform] = useState<boolean>(false);
    const [dateTimeDetails, setDateTimeDetails] = useState<{ day: string, date?: Date, openingTime?: string, closingTime?: string }[]>([{ day: "allDay" }])
    const [companyName, setCompanyName] = useState<string>("");

    const handleLogin = () => {
        navigate("/login")
    }
    const handleAddCompany = () => {
        setOpenCompanyform(true)
    }
    const handleChangeTime = (day: string, value: string | any, type: string, date?: Date) => {
        setDateTimeDetails((previousValue: string | any) => {
            const defaultIndex = previousValue?.findIndex((item: any) => item.day === day);
            if (defaultIndex !== -1) {
                const updatedValue = [...previousValue];
                updatedValue[defaultIndex] = {
                    ...updatedValue[defaultIndex],
                    ...(type === 'openingTime' && { openingTime: new Date(value) }),
                    ...(type === 'closingTime' && { closingTime: new Date(value) }),
                    ...(type === 'date' && { date: date })
                };
                return updatedValue;
            } else {
                return [...previousValue, {
                    day: day,
                    ...(type === 'openingTime' && { openingTime: new Date(value) }),
                    ...(type === 'closingTime' && { closingTime: new Date(value) }),
                    ...(type === 'date' && { date: date })
                }]
            }
        })

    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const handleDefaultTime = () => {
        const dateTimeDetailsDefault = dateTimeDetails?.filter((time) => time.day === 'allDay');
        days?.map((item) => {
            handleChangeTime(item, dateTimeDetailsDefault?.[0]?.openingTime, 'openingTime');
            handleChangeTime(item, dateTimeDetailsDefault?.[0]?.closingTime, 'closingTime');
            console.log('running', item)
        })
    }

    const handleSubmitCompanyDetails = () => {
        // const openingHours = 
        // const body = {name:companyName }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setOpenLogin(true)
        } else {
            setOpenLogin(false)
        }
    })
    console.log(dateTimeDetails, 'kamal')
    return (
        <div className="home-page">
            {openLogin ?
                <>
                    <h2>Welcome</h2>
                    <p>Please login to continue</p>
                    <Button variant="outlined" onClick={() => handleLogin()}>Login</Button>
                </>
                :
                <>
                    <h2>Company</h2>
                    <Button onClick={() => handleAddCompany()}>Add</Button>
                    {openCompanyForm &&
                        <div className="display-flex">
                            <TextField placeholder="Enter Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            <div style={{ margin: "10px 0px" }}>Set To All</div>
                            <div style={{ margin: "20px 0px", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                        label="Opening Time"
                                        value={dateTimeDetails[0]?.openingTime}
                                        onChange={(newValue) => handleChangeTime('allDay', newValue, 'openingTime')}
                                    />
                                    <TimePicker
                                        label="Closing Time"
                                        value={dateTimeDetails[0]?.closingTime}
                                        onChange={(newValue) => handleChangeTime('allDay', newValue, 'closingTime')}
                                    />
                                </LocalizationProvider>
                                <Button variant="outlined" onClick={() => handleDefaultTime()}>Set Default</Button>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                {
                                    days?.map((day, key) => (
                                        <div key={day} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                            <span style={{ fontWeight: "700" }}>{day} :</span>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        value={dateTimeDetails[key + 1]?.date}
                                                        onChange={(newValue) => handleChangeTime(day, "", "date", new Date(newValue!))}
                                                    />
                                                    <TimePicker
                                                        label="Opening Time"
                                                        value={dateTimeDetails[key + 1]?.openingTime}
                                                        onChange={(newValue) => handleChangeTime(day, newValue, 'openingTime')}
                                                    />
                                                    <TimePicker
                                                        label="Closing Time"
                                                        value={dateTimeDetails[key + 1]?.closingTime}
                                                        onChange={(newValue) => handleChangeTime(day, newValue, 'closingTime')}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}>
                                <Button variant="outlined" onClick={() => handleSubmitCompanyDetails()}>Submit</Button>
                            </div>

                        </div>}
                </>
            }
        </div>
    )
}

export default Home