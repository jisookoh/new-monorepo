import axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
});

export const get = async<ResponseType> (url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => {
    return await client.get(url, { ...options });
}

export const post = async<ParamType, ResponseType> (url: string, params?: ParamType, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => {
    return await client.post(url, params, { ...options });
}

export const put = async<ParamType, ResponseType> (url: string, param: ParamType, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => {
    return await client.put(url, param, { ...options });
}

export const patch = async<ParamType, ResponseType> (url: string, param: ParamType, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => {
    return await client.patch(url, param, { ...options });
}

export const remove = async<ResponseType> (url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> => {
    return await client.delete(url, { ...options });
}
