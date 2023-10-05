import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  endpoint = "http://localhost:8080/bicycles";

  constructor(private httpClient: HttpClient) { }

  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }

  getOne(id: number) {
    return this.httpClient.get(this.endpoint + `/${id}`)
  }

  addBicycles(bicycle: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", bicycle.model);
    bodyEncoded.append("brand", bicycle.brand);
    let body = bodyEncoded.toString();

    return this.httpClient.post(this.endpoint, body, httpOptions);
  }

  deleteBicycle(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`)
  }

  updateBicycles(id:number, bicycle: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", bicycle.model);
    bodyEncoded.append("brand", bicycle.brand);
    let body = bodyEncoded.toString();

    return this.httpClient.post(this.endpoint+`/${id}`, body, httpOptions);
  }

}
