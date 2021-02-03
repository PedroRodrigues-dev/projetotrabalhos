import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Materia from './materia';

@Injectable({
  providedIn: 'root',
})
export class MateriaService {
  protected url = 'http://localhost:8080/materia';

  constructor(protected http: HttpClient) {}

  findAll(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: Materia): Observable<Materia> {
    if (data.id) {
      return this.http.put<Materia>(this.url, data);
    } else {
      return this.http.post<Materia>(this.url, data);
    }
  }

  findById(id: number): Observable<Materia> {
    return this.http.get<Materia>(`${this.url}/${id}`);
  }
}