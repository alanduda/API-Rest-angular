import { StudentUpdateModel } from './../models/student-update.model';
import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public students: Array<any> = new Array();
  public student: StudentModel = new StudentModel;
  public studentUpdateModel: StudentUpdateModel = new StudentUpdateModel;
  public openModal: boolean = false;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.listStudents()
  }

  public closeModal(): void {
    this.openModal = false;
  }

  public listStudents(): void {
    this.studentsService.getStudents().subscribe(
      students => { this.students = students },
      err => { console.log('Error getting students: ', err) }
    );
  }

  public deleteStudent(id: any): void {
    this.listStudents();
    this.studentsService.deleteStudent(id).subscribe(
      student => {
        this.student = new StudentModel;
        this.listStudents();
      },
      err => { console.log('Error deleting students: ', err) }
    );
  }

  public addStudent(): void {
    this.studentsService.addStudent(this.student).subscribe(
      student => {
        this.student = new StudentModel;
        this.listStudents();
       },
      err => { console.log('Error adding students: ', err) }
    );
  }

  public prepareStudentUpdate(id: any, name: string, email: string): void {
    this.studentUpdateModel.id = id
    this.studentUpdateModel.nome = name;
    this.studentUpdateModel.email = email;

    this.openModal = true;
  }
}
