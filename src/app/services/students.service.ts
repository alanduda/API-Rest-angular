import { StudentModel } from './../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  clientUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.clientUrl);
  }

  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`${this.clientUrl}/${id}`);
  }

  addStudent(student: StudentModel): Observable<any> {
    return this.http.post(this.clientUrl, student);
  }

  updateStudent(id: any, student: StudentModel): Observable<any> {
    return this.http.put(`${this.clientUrl}/${id}`, student);
  }
}
