import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public static API_BASE = "/api";

  constructor(protected http: HttpClient) {}

  public get$ = <T = any>(url: string, queryParams?: object) =>
    this.http.get<T>(
      `${ApiService.API_BASE}${url}${this.serializeQueryParams(queryParams)}`
    );

  public getWithResponse$ = <T = any>(url: string, queryParams?: object) =>
    this.http.get<HttpResponse<T>>(
      `${ApiService.API_BASE}${url}${this.serializeQueryParams(queryParams)}`,
      { observe: "response" }
    );

  public post$ = <T = any>(url: string, requestBody: any) =>
    this.http.post<T>(`${ApiService.API_BASE}${url}`, requestBody);

  public put$ = <T = any>(url: string, requestBody: any, options = {}) =>
    this.http.put<T>(`${ApiService.API_BASE}${url}`, requestBody);

  public delete$ = <T = any>(url: string, queryParams?: object) =>
    this.http.delete<T>(
      `${ApiService.API_BASE}${url}${this.serializeQueryParams(queryParams)}`
    );

  public uploadFile$ = (
    url: string,
    formName: string,
    file: File | File[],
    httpMethod = "PUT"
  ) => {
    return new Observable(observer => {
      const token = sessionStorage.getItem("access_token");
      if (!token) {
        observer.error("unauthorized");
        observer.complete();
        return;
      }
      const req = new XMLHttpRequest();
      req.open(httpMethod, `${ApiService.API_BASE}${url}`);
      req.setRequestHeader("Authorization", `Bearer ${token}`);
      const formData: FormData = new FormData();
      if (file instanceof Array) {
        let size = 0;
        file.forEach(f => {
          formData.append(formName, f, f.name);
          size += f.size;
        });
        req.setRequestHeader("X-File-Size", size.toString());
      } else {
        formData.append(formName, file, file.name);
        req.setRequestHeader("X-File-Size", file.size.toString());
      }
      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            observer.next(JSON.parse(req.response));
          } else {
            observer.error(req.response);
          }
          observer.complete();
        }
      };
      req.send(formData);
    });
  };

  private serializeQueryParams = (params: any) => {
    if (!params) {
      return "";
    }
    // remove any undefined params
    const validatedParams: any = {};
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined) {
        validatedParams[key] = params[key];
      }
    });
    // don't encode commas
    return `?${new URLSearchParams(validatedParams)
      .toString()
      .replace(/%2C/g, ",")}`;
  };
}
