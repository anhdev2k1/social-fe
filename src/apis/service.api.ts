import axiosClient from "../configs/interceptor";
import {IResponse} from "../models/response"
export interface Service {
    _id?: string;
    name_service: string;
    slug?: string;
    updatedAt?: number
}
export const serviceApi = {
  getAll(): Promise<IResponse<Service[]>> {
    return axiosClient.get("/services");
  },
  getById(id: string): Promise<IResponse<Service>> {
    return axiosClient.get(`/service/${id}`);
  },
  getBySlug(slug: string): Promise<IResponse<Service>> {
    return axiosClient.get(`/service/${slug}`);
  },
  createService(data: Service): Promise<IResponse<Service>> {
    return axiosClient.post(`/service/`, data);
  },
  updateService(
    id: string,
    data: Service
  ): Promise<IResponse<Service>> {
    return axiosClient.patch(`/service/${id}`, data);
  },
  deleteService(id: string): Promise<IResponse<Service>> {
    return axiosClient.delete(`/service/${id}`);
  },
};
