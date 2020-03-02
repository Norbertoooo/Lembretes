import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private httpClient: HttpClient) { }

  listarLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembreteApiUrl}/lembrete`;
    return this.httpClient.get<Lembrete[]>(url);
  }

  listarLembretePorId(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.httpClient.get<Lembrete>(url);
  }

  adicionarLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/`;
    return this.httpClient.post<Lembrete>(url, lembrete);
  }

  atualizarLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${lembrete.id}`;
    return this.httpClient.put<Lembrete>(url, lembrete);
  }

  deletarLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.httpClient.delete<Lembrete>(url);
  }
}
