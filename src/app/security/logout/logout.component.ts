import { Component, OnInit } from '@angular/core';
import { MidlayerService } from 'src/app/thirdparty/midlayer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  runproject:any;
  constructor(private midlay: MidlayerService) { 
    this.runproject=midlay.globalsetting.appclient;
  }

  ngOnInit(): void {
  }

}
