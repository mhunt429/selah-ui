import { BaseApiResponse } from "@/data/baseApiResponse";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "/api", // Base path proxied by Nginx
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = sessionStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
      }
    );
  }

  // Generic GET request
  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<BaseApiResponse<T>>> {
    return this.axiosInstance.get<BaseApiResponse<T>>(url, config);
  }

  public post<T, U>(
    url: string,
    data?: U,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<BaseApiResponse<T>>> {
    return this.axiosInstance.post<BaseApiResponse<T>>(url, data, config);
  }

  public put<T, U>(
    url: string,
    data?: U,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<BaseApiResponse<T>>> {
    return this.axiosInstance.delete<BaseApiResponse<T>>(url, config);
  }
}

export default ApiService;
