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

  currentBicycleId!: number;

  endpoint = "http://localhost:8080/bicycles";


  constructor(private httpClient: HttpClient) { }

  setCurrentBicycleId(id: number){
    this.currentBicycleId = id;
  }

  getCurrentBicycleId(): number {
    return this.currentBicycleId;
  }

  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }

  getOne(id: number) {
    return this.httpClient.get(this.endpoint + `/${id}`)
  }

  addBicycles(bicycle: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", bicycle.model);
    bodyEncoded.append("year", bicycle.year);
    let body = bodyEncoded.toString();

    return this.httpClient.post(this.endpoint, body, httpOptions);
  }

  deleteBicycle(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`)
  }

  updateBicycles(id:number, bicycle: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", bicycle.model);
    bodyEncoded.append("year", bicycle.year);
    let body = bodyEncoded.toString();
    
    return this.httpClient.put(this.endpoint+`/${id}`, body, httpOptions);
  }

}
