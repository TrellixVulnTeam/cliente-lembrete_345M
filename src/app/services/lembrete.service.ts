import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lembrete } from '../interfaces/lembrete';


@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }
  //metodo Lembrete 
  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembretesApoUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }
  //metodo
  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApoUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }
  //metodo adiciona
  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApoUrl}/lembrete/`;
    return this.http.post<Lembrete>(url,lembrete);
  }
   //metodo atualiza
   atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApoUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url,lembrete);
  }   
  //metodo delete
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApoUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}
