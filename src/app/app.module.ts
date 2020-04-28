import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { AllStudentsItemComponent } from './all-students-item/all-students-item.component';
import { SingleStudentItemComponent } from './single-student-item/single-student-item.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { SingleStudentComponent } from './single-student/single-student.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AllStudentsItemComponent, SingleStudentItemComponent, AllStudentsComponent, SingleStudentComponent],
  imports: [BrowserModule, AppRoutingModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
