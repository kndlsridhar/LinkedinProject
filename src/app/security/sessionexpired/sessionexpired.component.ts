import { Component, OnInit } from '@angular/core';
import { MidlayerService } from 'src/app/thirdparty/midlayer.service';

@Component({
  selector: 'app-sessionexpired',
  templateUrl: './sessionexpired.component.html',
  styleUrls: ['./sessionexpired.component.css']
})
export class SessionexpiredComponent implements OnInit {
  runproject:any;
  constructor(private midlay: MidlayerService) { 
    this.runproject=midlay.globalsetting.appclient;
  }
 
  ngOnInit(): void {

   
  }

}
