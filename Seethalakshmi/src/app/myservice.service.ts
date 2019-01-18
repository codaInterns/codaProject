import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class MyserviceService {

  constructor(private http: HttpClient) {
    console.log("11");
  }

  ShowTodayDate() {
    return new Date();
  }
  loadData() {
        return this.http.get("/assets/emp.json");
  }
  // Subscribe to create the request
}
