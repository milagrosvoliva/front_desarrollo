import { Injectable } from '@angular/core';
import axios from 'axios';
import { config } from '../config/env';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.urls.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Interceptor para agregar token
    this.axiosInstance.interceptors.request.use(
      (request) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          request.headers['Authorization'] = token; // o `Bearer ${token}` si el backend lo requiere así
        }
        return request;
      },
      (error) => Promise.reject(error)
    );
  }

  async getData(): Promise<Array<{ name: string; description: string; image: string }>> {
    const response = await this.axiosInstance.get(config.urls.getFood);
    return response.data;
  }

  async postData(url: string, data: any): Promise<any> {
    console.log('📦 POST a:', url);
    console.log('📤 con datos:', data);
    const response = await this.axiosInstance.post(url, data);
    return response.data;
  }

  async get(url: string): Promise<any> {
    const response = await this.axiosInstance.get(url);
    return response.data;
  }
}
