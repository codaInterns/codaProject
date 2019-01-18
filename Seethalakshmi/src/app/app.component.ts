import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = "codaangular";
  months = ["Jan", "Feb", "Mar", "Apr", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  isAvailable = true;
  myClickFunction(event) {
    console.log("Button is clicked.." + event);
  }
  changemonths(event) {
    console.log(event);
  }
  people: any[] = [
    {
      "name": "Douglas pace",
      "age": 35,
      "country": "MARS"
    },
    {
      "name": "Mcleod Mueller",
      "age": 32,
      "country": "USA"
    },
    {
      "name": "Day Meyers",
      "age": 21,
      "country": "HK"
    },
    {
      "name": "Auuirre Ellis",
      "age": 34,
      "country": "UK"
    },
  ];
  todaydate;
  constructor(private myserrvice: MyserviceService) {
  }
  peeps;
  ngOnInit() {
    for (var i = 0; i < this.people.length; i++) {
      var p = this.people[i];
      console.log(p.name);
    }
    console.log(this.peeps);
    this.todaydate = this.myserrvice.ShowTodayDate();
    this.myserrvice.loadData().subscribe(res => this.peeps = res);
  }
  
  
  showConfig() {
    this.myserrvice.loadData().subscribe((res: Response) => {
      this.peeps = JSON.stringify(res.json);
    });
  }

  values; values2 = "";
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + '|';
  }
  onKey2(value: string) {
    this.values2 = value + '|';
  }
  values3 = ''
  onEnter(value: string) {
    this.values3 = value;
  }
  values4 = '';
  update(s: string) {
      this.values4 = s;
  }
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(i: string) {
    if (i) {
      this.heroes.push(i);
    }
  }
}
