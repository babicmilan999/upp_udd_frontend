import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

    getTry() {
        return this.http.get('http://localhost:8080/get');
    }

    upload(file: File) {
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', 'http://localhost:8080/uploadFile/', formdata, {
                withCredentials: true
            }
        );
        return this.http.request(req);
    }

}
