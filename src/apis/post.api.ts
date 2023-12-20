import axiosClient from "../configs/interceptor";
import {IResponse} from "../models/response"
export interface Post {
    _id?: string;
    title: string;
    description: string;
    content: string;
    service_id: string;
    slug?: string;
    deletedAt?: number;
    updatedAt?: number
}
export const postApi = {
  getAll(): Promise<IResponse<Post[]>> {
    return axiosClient.get("/posts");
  },
  getById(id: string): Promise<IResponse<Post>> {
    return axiosClient.get(`/post/${id}`);
  },
  getBySlug(slug: string): Promise<IResponse<Post[]>> {
    return axiosClient.get(`/post?q=${slug}`);
  },
  getPostRelated(service_id: string): Promise<IResponse<Post[]>> {
    return axiosClient.get(`/service/${service_id}/posts/related`);
  },
  createPost(data: Post): Promise<IResponse<Post>> {
    return axiosClient.post(`/post/`, data);
  },
  updatePost(
    id: string,
    data: Post
  ): Promise<IResponse<Post>> {
    return axiosClient.patch(`/post/${id}`, data);
  },
  deletePost(id: string): Promise<IResponse<Post>> {
    return axiosClient.delete(`/post/${id}`);
  },
};
