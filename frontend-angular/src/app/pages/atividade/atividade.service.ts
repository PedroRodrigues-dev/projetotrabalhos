import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Atividade from './atividade';

@Injectable({
  providedIn: 'root',
})
export class AtividadeService {
  protected url = 'http://localhost:8080/materia';

  constructor(protected http: HttpClient) {}

  findAll(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: Atividade): Observable<Atividade> {
    if (data.id) {
      return this.http.put<Atividade>(this.url, data);
    } else {
      return this.http.post<Atividade>(this.url, data);
    }
  }

  findById(id: number): Observable<Atividade> {
    return this.http.get<Atividade>(`${this.url}/${id}`);
  }
}