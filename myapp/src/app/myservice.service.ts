import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  showTodayDate(): Date{
    let ndate=new Date();
    return ndate;
  }

  loadData(){
     this.http.get("http://api.icndb.com/jokes/random").subscribe(res => {
          console.log(res);
     });
  }
}
