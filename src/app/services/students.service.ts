import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  clientUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any>{
    return this.http.get(this.clientUrl);
  }
}
