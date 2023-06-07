import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import * as Base64 from 'crypto-js/enc-base64';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root'
})
export class MidlayerService {

  globalsetting = {
    production: 1,
    appclient:'ChefCode',
    //appclient:'boms',
    retry: 1,
    //baseurl: 'http://localhost:22435/'
     baseurl: 'https://authbook.in/aptser/',
    //baseurl: 'https://api.aptdc.in/aptser/',
    base64Image:'data:image/png;base64,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'
  };
  hskkey: any = "0123456789123456";
  encrypted: any = "";
  decrypted: any = "";
  hash: any = "";
  request: any = "";
  responce: any = "";
  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient,
    private router: Router,
  ) {
    if(this.globalsetting.appclient="boms"){
      this.globalsetting.baseurl="https://authbook.in/aptser/";
    }
    if(this.globalsetting.appclient="ChefCode"){
      this.globalsetting.baseurl="https://authbook.in/aptser/";
    }
   }
 

  getPostHttpOptionsplain(encobj: any, encsign: any): any {
    try {
      this.hash = Base64.stringify(CryptoJS.HmacSHA256("0123456789123456", "0123456789123456"));

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          accessus: '0123456789123456',
          accesske: '0123456789123456',
          accesstk: '0123456789123456',
          accessdt: encobj,
          accessdtsi: this.hash,
        }),
      };
      return httpOptions;
    }
    catch (error) {
      this.clearjunk();
      return this.router.navigate(['/Badrequest']);
    }
  }
  getPostHttpOption_withenc(encobj: any, encsign: any): any {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',

        }),
      };
      return httpOptions;
    }
    catch (error) {
      return this.Responseerror(error);
    }

  }

  HttpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',


      }),
    };
    return httpOptions;
  }
  getPostHttpOptionauth(encobj: any, encsign: any): any {
    debugger;
    try {
      if (this.cookieService.get('_Uenc') != "" && this.cookieService.get('_hsk') != "" && this.cookieService.get('_Urole') != "" && this.cookieService.get('_Uid') != ""  && this.cookieService.get('_sltkn') != "" && this.cookieService.get('_cltkn') != "") {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accessus: this.cookieService.get('_Uenc'),
            accesske: this.cookieService.get('_hsk'),
            accesstk: this.cookieService.get('_sltkn'),
            accessdt: encobj,
            accessdtsi: encsign,
          }),
        };
        return httpOptions;
      }
      else {
        this.clearjunk();
        return this.router.navigate(['/Badrequest']);
      }
    }
    catch (error) {
      return this.Responseerror(error);
    }

  }

  enccall(req: any): string {
    if (this.hskkey == null || this.hskkey == "" || this.hskkey == undefined) {
      this.hskkey == "0123456789123456";

    }
    if (this.hskkey != null && this.hskkey != "0123456789123456") {
      this.hskkey = this.cookieService.get('_hsk');
    }
    const keyVal = CryptoJS.enc.Utf8.parse(this.hskkey);
    const ivVal = CryptoJS.enc.Utf8.parse(this.hskkey);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(req), keyVal, { keySize: 128 / 8, iv: ivVal, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, }).toString();
    if (this.encrypted.length > 20) { return encrypted.toString(); }
    else { this.encrypted == "invalid"; }
    return encrypted;
  }
  deccall(req: any) {
 
    if (this.hskkey == null || this.hskkey == "" || this.hskkey == undefined) {
      this.hskkey == "0123456789123456";

    }
    if (this.hskkey != null && this.hskkey != "0123456789123456") {
      this.hskkey = this.cookieService.get('_hsk');
    }
    let _key = CryptoJS.enc.Utf8.parse(this.hskkey);
    let _iv = CryptoJS.enc.Utf8.parse(this.hskkey);
    let decrypted = CryptoJS.AES.decrypt(req, _key, { keySize: 16, iv: _iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8);

    if (decrypted.length > 20) {

      return JSON.parse(decrypted);
    }
    else {
      decrypted == "invalid";
      return decrypted;
    }
  }
  Getuser() {

   
    if (sessionStorage.getItem("_Uenc") !== "") {

      if (sessionStorage.getItem("_Uenc") == this.cookieService.get('_Uenc')) {
        let obj: any = this.deccall(sessionStorage.getItem("Logdata"));
        if (obj[0].USER_ROLE != null || obj[0].USER_ROLE != undefined) {
          return obj;
        }
        else {

          Swal.fire({
            title: 'Sessionexpired....',
            text: 'Sessionexpired!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
              sessionStorage.clear();
              this.cookieService.deleteAll();
              this.router.navigate(["/Sessionexpired"]);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
              sessionStorage.clear();
              this.cookieService.deleteAll();
              this.router.navigate(["/Sessionexpired"]);
            }
          })


        }
      }
      else {
        Swal.fire({
          title: 'Sessionexpired....',
          text: 'Sessionexpired!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            sessionStorage.clear();
            this.cookieService.deleteAll();
            this.router.navigate(["/Sessionexpired"]);
          }
          else if (result.dismiss === Swal.DismissReason.cancel) {
            sessionStorage.clear();
            this.cookieService.deleteAll();
            this.router.navigate(["/Sessionexpired"]);
          }
        })
      }

    }
    else {

      Swal.fire({
        title: 'Sessionexpired....',
        text: 'Sessionexpired!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          sessionStorage.clear();
          this.cookieService.deleteAll();
          this.router.navigate(["/Sessionexpired"]);
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
          sessionStorage.clear();
          this.cookieService.deleteAll();
          this.router.navigate(["/Sessionexpired"]);
        }
      })


    }
  }

  JSONToCSVConvertorpdf(JSONData: any, ReportTitle: string, ShowLabel: any): void {
   
    const arrData =
      typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    let CSV = 'sep=,' + '\r\n\n';
    if (ShowLabel) {
      let row = '';
      for (let index in arrData[0]) {
        row += index + ',';
      }
      row = row.slice(0, -1);
      CSV += row + '\r\n';
    }
    for (let i = 0; i < arrData.length; i++) {
      let row = '';
      for (let index in arrData[i]) {
        row += '"' + arrData[i][index] + '",';
      }

      row.slice(0, row.length - 1);
      CSV += row + '\r\n';
    }

    if (CSV == '') {
      alert('Invalid data');
      return;
    }

    let fileName = '';
    fileName += ReportTitle.replace(/ /g, '_');

    // Initialize file format you want csv or xls
    const uri = 'data:application/pdf;' + escape(CSV);
    const link = document.createElement('a');
    link.href = uri;

    // set the visibility hidden so it will not effect on your web-layout

    // link.style = 'visibility:hidden';
    link.download = fileName + '.pdf';

    // this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  JSONToCSVConvertor(JSONData: any, ReportTitle: string, ShowLabel: any): void {
   
    const arrData =
      typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    let CSV = 'sep=,' + '\r\n\n';
    if (ShowLabel) {
      let row = '';
      for (let index in arrData[0]) {
        row += index + ',';
      }
      row = row.slice(0, -1);
      CSV += row + '\r\n';
    }
    for (let i = 0; i < arrData.length; i++) {
      let row = '';
      for (let index in arrData[i]) {
        row += '"' + arrData[i][index] + '",';
      }

      row.slice(0, row.length - 1);
      CSV += row + '\r\n';
    }

    if (CSV == '') {
      alert('Invalid data');
      return;
    }

    let fileName = '';
    fileName += ReportTitle.replace(/ /g, '_');

    // Initialize file format you want csv or xls
    const uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    const link = document.createElement('a');
    link.href = uri;

    // set the visibility hidden so it will not effect on your web-layout

    // link.style = 'visibility:hidden';
    link.download = fileName + '.csv';

    // this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  getnocontent(contenttype:any){
    if(contenttype=="IMG"){
     return "";

      }
      return "";
  }
  dataTableOptions(): any {
    return {
        pagingType: 'full_numbers',
        pageLength: 10,
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, 'ALL'],
        ],
        processing: true,
        search: true,
        dom: 'Bfrtip',
        buttons: [
            'excel', 'pdf'
        ]

    };
}
  public hmackhash(req: any) {
    const hmacDigest = CryptoJS.HmacSHA1("0123456789123456", "0123456789123456");
  }
  clearjunk() { sessionStorage.clear(); this.cookieService.deleteAll(); }
  Responseerror(error: any): void {
   
    if (error.status === 401) {
      this.clearjunk();
      this.router.navigate(['/Unauthorizedaccess']);
    } else if (error.status === 403) {
      this.clearjunk();
      this.router.navigate(['/Unauthorizedaccess']);
    }
    else if (error.status >= 500 && error.status < 600) {
      this.clearjunk();
      this.router.navigate(['/Badrequest']);
    }
    else if (error.status === 400) {
      this.clearjunk();
      this.router.navigate(['/Badrequest']);
    }
    else if (error === "session") {
      this.clearjunk();
      this.router.navigate(['/Sessionexpired']);
    }
    else {
      this.router.navigate(['/Badrequest']);
    }
  }

}




