import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public students: Array<any> = new Array();

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.listStudents()
  }

  private listStudents(): void {
    this.studentsService.getStudents().subscribe(
      students => { this.students = students },
      err => { console.log('Erro ao obter Alunos ', err) }
    );
  }

}
