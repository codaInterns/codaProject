import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'myapp';
  // month: string[]=['jan','feb','mar','apr'];
  // jsonval:any={
  //   "key":"value"
  // }
  // isavailable: boolean=false;
  // todaydate:any= Date.now();

  // people: any[]=[
  //   {
  //     "name":"goku",
  //     "age":35,
  //     "country":"dbz"
  //   }
  // ];
  
   constructor(){
   }

  ngOnInit(){
    
    }

  //   this.todaydate=this.myservice.showTodayDate();
  //   this.jsonval=this.myservice.loadData();
  //   console.log(this.jsonval);
  // }

  // values;values2="";
  // onKey(event: KeyboardEvent){
  //  this.values += (<HTMLInputElement>event.target).value + ' | '; 
  // }
  
  // onKey2(value: string){
  //   this.values2 = value+ '|';
  // }

  // values3='';
  // onEnter(value: string){
  //   this.values3=value;
  // }
  // values4=''; 
  // update(value: string){
  //   this.values4 = value;
  // }
  // heroes=['goku','vegeta','piccalo'];
  // addHero(newHero: string){
  //   if(newHero){
  //     this.heroes.push(newHero);
  //   }
  // }

  
}
