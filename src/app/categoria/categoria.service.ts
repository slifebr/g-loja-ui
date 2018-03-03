import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService {

  baseUrl = 'http://localhost:8080/api/categorias';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.baseUrl);
  }

}
