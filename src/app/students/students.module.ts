import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students.component';
import { StudentStartComponent } from './student-start/student-start.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentItemComponent } from './student-list/student-item/student-item.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentStartComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentDetailComponent,
    StudentItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule {}
