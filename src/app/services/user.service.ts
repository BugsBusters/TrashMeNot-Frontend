import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public headers;
  private baseUrl = 'http://90.147.188.53/backend/api/';
  private tokenUrl = '';

  constructor(private http: HttpClient) {
  }

  register(utente: any) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json: charset=utf-8');
    return this.http.post(this.baseUrl + 'register', utente, this.headers);
  }
}
