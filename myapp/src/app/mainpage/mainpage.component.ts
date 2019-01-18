import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  formdata;
  cutomerdata;
  constructor(private http: HttpClient) { }
  stateCtrl: FormControl;
  ngOnInit() {
     this.formdata = new FormGroup({
        fname: new FormControl("", Validators.compose([
           Validators.required,
           Validators.minLength(3)
        ])),
        lname: new FormControl("", Validators.compose([
           Validators.required,
           Validators.minLength(3)
        ])),
        address:new FormControl(""),
        phoneno:new FormControl("")
     });
  }
  onClickSubmit(data) {
     document.getElementById("custtable").style.display="";
     this.cutomerdata = [];
     for (var prop in data) {
        this.cutomerdata.push(data[prop]);
     }
     console.log(this.cutomerdata);
  }
}


