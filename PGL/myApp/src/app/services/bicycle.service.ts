import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  endpoint = "http://localhostt:8080/api/bicycles";

  constructor(private httpClient: HttpClient) { }

  getBicycles(){
    return this.httpClient.get(this.endpoint);
  }


}
