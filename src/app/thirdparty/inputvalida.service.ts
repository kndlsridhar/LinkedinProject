import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class InputvalidaService{
  isEmpty(data: string): boolean {
    if (data === null || data === undefined || data === '') {
      return true;
    }
    return false;
  }

  isNumber(data: string): boolean {
    if (this.isEmpty(data)) {
      return false;
    }

    const regexPattren = new RegExp('^[0-9]+([.][0-9]+)?$');
    const response = regexPattren.test(data);

    if (response) {
      return true;
    } else {
      return false;
    }
  }

  isValidName(data: string): boolean {
    if (this.isEmpty(data)) {
      return true;
    }

    const regexPattren = new RegExp(/[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/);
    const response = regexPattren.test(data);

    if (response) {
      return false;
    } else {
      return true;
    }
  }

  dateFormatConversion(date: any): string {
    let result = '';
    const tempVal = date.split('-');
    result = tempVal[2] + '-' + tempVal[1] + '-' + tempVal[0];
    return result;
  }

  indianNumberFormat(num: string): string {
    let lastThree = num.substring(num.length - 3);
    let otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers != '') {
      lastThree = ',' + lastThree;
    }
    const result =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return result;
  }
 
  mobileNumCheck(data: string): boolean {
    const response = String(data).match('[6-9]{1}[0-9]{9}');
    if (response) {
      const invalidNumbers = [
        '6666666666',
        '7777777777',
        '8888888888',
        '9999999999',
      ];

      for (let i = 0; i < invalidNumbers.length; i++) {
        if (data === invalidNumbers[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  panNumCheck(data: string): boolean {
    if (this.isEmpty(data)) {
      return false;
    }

    const regexPattren = new RegExp('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$');
    const response = regexPattren.test(data);

    if (response) {
      return true;
    } else {
      return false;
    }
  }

  mailCheck(data: string): boolean {
    if (this.isEmpty(data)) {
      return false;
    }

    const regexPattren = new RegExp(
      '^([a-zA-Z0-9]+)([_.-{1}])?([a-zA-Z0-9]+)@([a-zA-Z0-9]+)([.])([a-zA-Z.]+)$'
    );
    const response = regexPattren.test(data);

    if (!response) {
      return true;
    } else {
      return false;
    }
  }

  isValidDate(data: string): boolean {
    if (this.isEmpty(data)) {
      return false;
    }

    const regexPattren = new RegExp(
      '^[1-2]{1}[0-9]{3}/([0]{1}[1-9]{1}|[1]{1}[0-2]{1})/([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-1]{1})$'
    );
    const response = regexPattren.test(data);

    if (response) {
      return true;
    } else {
      return false;
    }
  }

  /* END VALIDATIONS */

  /* ENCRYPTION */

  encryptionKeys(): any {
    return {
      key: '7061737323313233',
      iv: '7061737323313233',
    };
  }
 

  dataTableOptions(): any {
    return {
      pagingType: 'full_numbers',
      pageLength: 15,
      lengthMenu: [
        [10, 15, 25, 50, -1],
        [10, 15, 25, 50, 'ALL'],
      ],
    };
  }
}
