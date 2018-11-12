import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentStartComponent } from './student-start/student-start.component';
import { StudentsComponent } from './students.component';

const studentsRoutes: Routes = [
  { path: '', component: StudentsComponent, children: [
    { path: '', component: StudentStartComponent },
    { path: 'new', component: StudentEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: StudentDetailComponent },
    { path: ':id/edit', component: StudentEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(studentsRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class StudentsRoutingModule {}
