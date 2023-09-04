import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {
  API_BASE_URL = environment.API_BASE_URL;
  API_URL = 'Inspection/get_institutionDetails';
  constructor(private http : HttpClient) { }
  getInstituteInfo(url : string):Observable <any>{
    return this.http.get(this.API_BASE_URL + this.API_URL + '/' + url)
  }
}
