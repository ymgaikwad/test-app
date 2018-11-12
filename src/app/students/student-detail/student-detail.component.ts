import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  id: number;

  constructor(private studentService: StudentService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.student = this.studentService.getStudent(this.id);
        }
      );
  }

  onEditStudent() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteStudent() {
    this.studentService.deleteStudent(this.id);
    this.router.navigate(['/students']);
  }

}
