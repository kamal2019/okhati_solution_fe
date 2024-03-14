import { Button, Collapse } from "@mui/material";

import { ICompanyDetail } from "../../../types"
import { getDate, getTimeFormat } from "../../../utils/functions"

interface ICompanyDetailProps {
    item: ICompanyDetail,
    toBeOpenedList: number[],
    index: number,
    handleOpenDetails: (number: number) => void;
}
export const CompanyList = ({ item, toBeOpenedList, handleOpenDetails, index }: ICompanyDetailProps) => {
    return (
        <div style={{ padding: "15px", border: "1px solid #c9c9c9", borderRadius: "20px", width: "400px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: "600" }}>{item.name}</div>
                <Button variant="outlined" onClick={() => handleOpenDetails(index)}>View Details</Button>
            </div>
            <Collapse in={toBeOpenedList?.includes(index)}>
                {item.openingHours?.map((time) => (
                    <>
                        <div>{time.day} ({getDate(time.date)}) : </div>
                        <div style={{ marginLeft: "20px" }}>
                            <div>Opening Time : {getTimeFormat(time.openingTime)}</div>
                            <div>Closing Time : {getTimeFormat(time.closingTime)}</div>
                        </div>
                    </>
                ))}
            </Collapse>
        </div>
    )
}