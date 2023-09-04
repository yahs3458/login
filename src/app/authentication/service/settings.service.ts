import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiUrl } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private APIBaseUrl: string;
  constructor(private http: HttpClient) {
    this.APIBaseUrl = environment.API_BASE_URL;
  }
  getBootInfo(): Observable<any> {
    return this.http.get(this.APIBaseUrl + apiUrl.API_user_BootInfo_URL);
  }
}
