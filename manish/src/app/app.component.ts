import { Component, OnInit } from '@angular/core';
import{MyserviceService} from "./myservice.service";
@Component({                   
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the start of angular with codaangular';
  months =["januray","feb","march","april","may","june","july","aug","sept","oct","nov","dec"];
  isavailable = false;
  todaydate:any;
  jsonval:any;
  myfunction(event){
    alert("button is clicked");
    console.log(event);
  }
  changemonths(event){
    console.log("event is"+event);
  }

  people: any[] = [
    {
    "name": "dougles pace",
    "age" : 35,
    "country" : "mars"  
  },
  {
    "name": "dougles",
    "age" : 30,
    "country" : "jupiter" 
  },
  {
    "name": "dougl",
    "age" : 25,
    "country" : "june" 
  }
  
  ];


ngOnInit(){
  for(var i = 0 ; i <this.people.length;i++){
    var p = this.people[i];
    console.log(p.name+"....."+p.age+"....."+p.country);
    this.todaydate = this.myservice.showTodayDate();
    this.jsonval = this.myservice.loadData();
    console.log(this.jsonval);
  }
}
values;values2 = "";
onKey(event:KeyboardEvent){
  this.values += (<HTMLInputElement>event.target).value + '|';
}
onKey2(value:string){
this.values2 = value+ '|';
}
values3 = '';
onEnter(value:string){
this.values3 = value;
}
values4 = '';
update(value:string){
  this.values4 = value;
}
heroes = ['wind','storm','earth','fire'];
addHero(newHero :string){
  if(newHero){
    this.heroes.push(newHero);
  }
}

title2 = "angular services exercise";
constructor(private myservice:MyserviceService){}
}
