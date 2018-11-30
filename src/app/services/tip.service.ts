import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  public headers;
  private baseUrl = 'https://90.147.188.53/backend/api/';
  private tokenUrl = '';

  constructor(private http: HttpClient) {
  }


  getAllTips() {
    return this.http.get(this.baseUrl + 'tips');

  }
}
