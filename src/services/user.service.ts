import { axiosInstance } from "@/helpers/axiosInstance";

export class UserService {
  getListLike(params: any) {
    return axiosInstance.request({
      method: "GET",
      url: "/user/list-like/",
      params,
    })
  };
  trending(params: any) {
    return axiosInstance.request({
      method: "GET",
      url: "/user/trending/",
      params,
    })
  };
  search(data: any) {
    return axiosInstance.request({
      method: "POST",
      url: "/user/search/",
      data,
    })
  }
  
}
