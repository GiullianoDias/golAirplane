import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) { }

  getAirplanes() {
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept-Language', 'pt-BR');
    return this._http.get<any>(environment.apiUrl + '/airplane', { headers: header });
  }

  getAirplane(id) {
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept-Language', 'pt-BR');
    return this._http.get<any>(environment.apiUrl + '/airplane/' + id, { headers: header });
  }

  InsertAirplane(airplane) {
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept-Language', 'pt-BR');
    return this._http.put<any>(environment.apiUrl + '/airplane', airplane, { headers: header });
  }

  deleteAirplane(id) {
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept-Language', 'pt-BR');
    return this._http.delete<any>(environment.apiUrl + '/airplane/' + id, { headers: header });
  }

}
