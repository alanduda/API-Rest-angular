import { Component, OnInit } from '@angular/core';
import { StudentUpdateModel } from '../models/student-update.model';
import { StudentsService } from '../services/students.service';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-update-student-modal',
  templateUrl: './update-student-modal.component.html',
  styleUrls: ['./update-student-modal.component.scss']
})
export class UpdateStudentModalComponent implements OnInit {

  public student: StudentUpdateModel = new StudentUpdateModel;

  constructor(
    private studentComponente: StudentsComponent,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.student = this.studentComponente.studentUpdateModel;
  }

  public closeModal(): void {
    this.studentComponente.openModal = false;
    this.studentComponente.studentUpdateModel = new StudentUpdateModel;
  }

  public updateStudent(): void {
    const id = this.student.id
    delete this.student["id"];
    this.studentsService.updateStudent(id, this.student).subscribe(
      student => {
        this.studentComponente.studentUpdateModel = new StudentUpdateModel;
        this.studentComponente.listStudents();
        this.closeModal();
       },
      err => { console.log('Error updating students: ', err) }
    );
  }
}
