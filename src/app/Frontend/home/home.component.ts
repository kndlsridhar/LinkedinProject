import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    debugger;
    this.financial();
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  financial(){
    alert('Hello');
  }

}
