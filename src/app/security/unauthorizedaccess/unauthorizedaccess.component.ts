import { Component, OnInit } from '@angular/core';
import { MidlayerService } from 'src/app/thirdparty/midlayer.service';

@Component({
  selector: 'app-unauthorizedaccess',
  templateUrl: './unauthorizedaccess.component.html',
  styleUrls: ['./unauthorizedaccess.component.css']
})
export class UnauthorizedaccessComponent implements OnInit {

  runproject:any;
  constructor(private midlay: MidlayerService) { 
    this.runproject=midlay.globalsetting.appclient;
  }
 

  ngOnInit(): void {
  }

}
