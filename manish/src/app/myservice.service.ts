import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

var i =1000000;
var j = 2000000;
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) {
    console.log(i+":"+j);
    
   }
  showTodayDate():Date{
    let ndate = new Date();
    return ndate;
  }
  loadData(){
    return this.http.get("assets/employee.json");
  }
 
}
