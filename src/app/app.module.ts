//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

//Services
import { StudentsService } from './services/students.service';
import { FormsModule } from '@angular/forms';
import { UpdateStudentModalComponent } from './update-student-modal/update-student-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    UpdateStudentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentsService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
