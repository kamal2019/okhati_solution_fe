import API from "../api";

export const getCompanyList = async () => {
    let response;
    try {
        response = await API.get("/user/company");
        return response?.data;
    }
    catch (error: any) {
        return error
    }
}

export const createCompany = async (body: any, token: string) => {
    let response;
    try {
        response = await API.post("/user/company", {
            ...body
        },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response?.data
    }
    catch (error: any) {
        return error
    }
}