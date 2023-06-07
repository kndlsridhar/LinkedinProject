import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  toastsuccess(message: string) {
    this.toastr.success(message, 'Success');

    
  }
  
  toastwarning(message: string) {
    this.toastr.warning(message, 'warning');
  }
  toasterror(message: string) {
    this.toastr.error(message, 'error');
  }
  toastinfo(message: string) {
    this.toastr.info(message, 'info');
  }
  info(message: string): void{
    Swal.fire('info', message, 'info');
  }

  error(message: string): void{
    Swal.fire('error', message, 'error');
  }

  success(message: string): void{
    Swal.fire('info', message, 'success');
  }

  warning(message: string): void{
    Swal.fire('info', message, 'warning');
  }
}
