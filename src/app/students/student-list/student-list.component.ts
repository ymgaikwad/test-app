import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  students: Student[];
  subscription: Subscription;

  constructor(private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.studentService.studentsChanged
      .subscribe(
        (students: Student[]) => {
          this.students = students;
        }
      );
    this.students = this.studentService.getStudents();
  }

  onNewStudent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
