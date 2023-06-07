import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { MidlayerService } from 'src/app/thirdparty/midlayer.service';

@Injectable({
  providedIn: 'root'
})
export class ClientcallService {
  apiurl = '';
  constructor(private httpClient: HttpClient, private midlay: MidlayerService) 
  {this.apiurl = midlay.globalsetting.baseurl ;}
   
  public clinetposturlopen(req: any,apiname:any) { 
       let encobj=this.midlay.enccall(JSON.stringify(req));const reqobj={ _Clients3a2:encobj}; 
       const result:any = this.httpClient .post(`${this.apiurl}${apiname}`, reqobj, this.midlay.getPostHttpOptionsplain(encobj,encobj)).pipe(retry(this.midlay.globalsetting.retry)).toPromise();
       return result;
    }


  public clinetposturlauth(req: any,apiname:any) {
    let encobj=this.midlay.enccall(JSON.stringify(req));const reqobj={ _Clients3a2:encobj}; 
    const result: any = this.httpClient.post(`${this.apiurl}${apiname}`,encobj,this.midlay.getPostHttpOptionauth(encobj,encobj) ).pipe(retry(this.midlay.globalsetting.retry)).toPromise();
    return result;;
  }
  
  public clinetposturlauth_withoutenc(req: any,apiname:any) {
    let encobj={_Clients3a2:this.midlay.enccall(req)};
    const result: any = this.httpClient.post(`${this.apiurl}${apiname}`,req,this.midlay.HttpOptions() ).pipe(retry(this.midlay.globalsetting.retry)).toPromise();
    return result;;
  }

  
}
