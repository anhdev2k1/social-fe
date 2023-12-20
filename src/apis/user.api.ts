import axiosClient from "../configs/interceptor";
import {IResponse} from "../models/response"
export interface IUserPayload {
    _id?: string;
    email: string;
    password?: string;
    token?: string
}
export const userApi = {
  login(data: IUserPayload): Promise<IResponse<IUserPayload>> {
    return axiosClient.post(`/login`,data);
  },
  register(data: IUserPayload): Promise<IResponse<IUserPayload>> {
    return axiosClient.post(`/register`,data);
  },
  getMe(): Promise<IResponse<IUserPayload>> {
    return axiosClient.post(`/me`);
  },
};
