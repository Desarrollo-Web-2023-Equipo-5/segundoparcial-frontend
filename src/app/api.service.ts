import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  obtenerEmpresaPorId(id: number): Observable<any> {
    const url = `${this.url}/empresas/${id}`;
    return this.http.get(url);
  }

  obtenerEmpresas(): Observable<any> {
    const url = `${this.url}/empresas`;
    return this.http.get(url);
  }

  obtenerPersonaPorId(id: number): Observable<any> {
    const url = `${this.url}/personas/${id}`;
    return this.http.get(url);
  }

  obtenerTodasLasPersonas(): Observable<any> {
    const url = `${this.url}/personas`;
    return this.http.get(url);
  }

  eliminarPersonaPorId(id: number): Observable<any> {
    const url = `${this.url}/personas/${id}`;
    return this.http.delete(url);
  }

}
