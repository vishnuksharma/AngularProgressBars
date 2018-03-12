import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';

const API_URL = environment.API_URL;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }


  public getBars() {
    return this.http
      .get(API_URL+'/bars')
      .map(response => {
        // console.log('Res : '+response);
         const bars = response.json();
         return bars;
      
    }).catch(this.handleError);
  }

  handleError(error: Response | any) {
    console.error('bars service failed', error);
    // return Observable.throw(error.statusText='ERROR');
    return 'E';
  }

}
