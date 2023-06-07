import { Component, OnInit } from '@angular/core';
import { MidlayerService } from 'src/app/thirdparty/midlayer.service';

@Component({
  selector: 'app-badrequest',
  templateUrl: './badrequest.component.html',
  styleUrls: ['./badrequest.component.css']
})
export class BadrequestComponent implements OnInit {

  runproject:any;
  constructor(private midlay: MidlayerService) { 
    this.runproject=midlay.globalsetting.appclient;
  }

  ngOnInit(): void {
  }

}
