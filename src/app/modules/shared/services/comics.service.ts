import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../../../../database/models/comics.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(
    private http: HttpClient
  ) { }

  fetchDataFromWebService(): Observable<Root> {
    // Lógica para fazer a requisição HTTP para o Web Service e receber o JSON
     return this.http.get<Root>('http://gateway.marvel.com/v1/public/characters?ts=1671650813922&apikey=5fb47a4f1e3f43eff8e4675ed86987d4&hash=0cc5408afa3ff931679805065ef325b5');
   
  }

}
