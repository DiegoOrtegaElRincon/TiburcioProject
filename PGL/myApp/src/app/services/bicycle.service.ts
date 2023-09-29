import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
}

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  endpoint = "http://localhost:8080/bicycles";

  constructor(private httpClient: HttpClient) { }

  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }

  postBicycles(bicycle:any) {
    let body = new URLSearchParams()
    body.append("model" , bicycle.model)
    body.append("year" , bicycle.year)
    let bodyencoded = body.toString
    return this.httpClient.post(this.endpoint, bodyencoded, httpOptions)
  }

  deleteBicycle(id:string){
    return this.httpClient.delete(this.endpoint + `/${id}`)
  }


}
