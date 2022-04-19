import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Result } from '../models/results.model';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient){}

  getRandomUser():Observable<Result[]>{
    return this.http.get<Result[]>(`${API_PATH}`);
  }
}
