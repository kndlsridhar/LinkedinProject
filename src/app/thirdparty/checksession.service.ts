import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { MidlayerService } from './midlayer.service';


@Injectable({
  providedIn: 'root',
})

export class ChecksessionService implements CanActivate {
  
  constructor(
    public router: Router,
    private cookieService: CookieService,
    private mid: MidlayerService,
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

 
    let _lo_Uenc = sessionStorage.getItem("_Uenc");
    let _lo_hsk = sessionStorage.getItem("_hsk");
    let _lo_Urole = sessionStorage.getItem("_Urole");
    let _lo_Uid = sessionStorage.getItem("_Uid");
    let _lo_sltkn = sessionStorage.getItem("_sltkn");
    let _lo_cltkn = sessionStorage.getItem("_cltkn");
    let _co_Uenc = this.cookieService.get('_Uenc');
    let _co_hsk = this.cookieService.get('_hsk');
    let _co_Urole = this.cookieService.get('_Urole');
    let _co_Uid = this.cookieService.get('_Uid');
    let _co_sltkn = this.cookieService.get('_sltkn');
    let _co_cltkn = this.cookieService.get('_cltkn');
    
    if (_lo_Uenc === undefined || _lo_Uenc === null || _lo_Uenc === '' && _lo_hsk === undefined || _lo_hsk === null || _lo_hsk === '' && _lo_Urole === undefined || _lo_Urole === null || _lo_Urole === '' && _lo_Uid === undefined || _lo_Uid === null || _lo_Uid === '' && _lo_sltkn === undefined || _lo_sltkn === null || _lo_sltkn === '' && _lo_cltkn === undefined || _lo_cltkn === null || _lo_cltkn === '')
     {
      sessionStorage.clear();
      this.cookieService.deleteAll();
      this.mid.Responseerror("session");
      return false;
     }
     if (_co_Uenc === undefined || _co_Uenc === null || _co_Uenc === '' && _co_hsk === undefined || _co_hsk === null || _co_hsk === '' && _co_Urole === undefined || _co_Urole === null || _co_Urole === '' && _co_Uid === undefined || _co_Uid === null || _co_Uid === '' && _co_sltkn === undefined || _co_sltkn === null || _co_sltkn === '' && _co_cltkn === undefined || _co_cltkn === null || _co_cltkn === '')
      {
        sessionStorage.clear();
      this.cookieService.deleteAll();
      this.mid.Responseerror("session");
      return false;
      }

      if (_lo_Uenc == _co_Uenc && _lo_hsk == _co_hsk&& _lo_Urole == _co_Urole  && _lo_Uid == _co_Uid && _lo_sltkn == _co_sltkn && _lo_cltkn == _co_cltkn) {

        
        let logtime:any = sessionStorage.getItem("logtime");
        let diffTime = Math.abs(new Date().valueOf() - new Date(logtime).valueOf());
        let days = diffTime / (24*60*60*1000);
        let hours = (days % 1) * 24;
        let minutes = (hours % 1) * 60;
        let secs = (minutes % 1) * 60;
        return true;
      }
      else {
        sessionStorage.clear();
        this.cookieService.deleteAll();
        this.mid.Responseerror("session");
        return false;
      }
     

  }

}

