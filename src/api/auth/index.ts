import API from "../api"

interface IUserAuthBody {
    email: string,
    password: string
}
export const signUp = async (body: IUserAuthBody) => {
    let response;
    try {

        response = await API.post(
            "auth/signup",
            {
                ...body,
            },
        );
        return response?.data
    }
    catch (error: any) {
        return error?.response?.data
    }
}

export const login = async (body: IUserAuthBody) => {
    let response;
    try {

        response = await API.post(
            "auth/login",
            {
                ...body,
            },
        );
        return response?.data
    }
    catch (error: any) {
        return error?.response?.data
    }
}