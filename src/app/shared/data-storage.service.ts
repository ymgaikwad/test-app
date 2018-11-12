import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { StudentService } from '../students/student.service';
import { Student } from '../students/student.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private studentService: StudentService,
              private authService: AuthService) {
  }

  storeStudents() {
    const token = this.authService.getIdToken();

    return this.http.put('https://ng-student.firebaseio.com/students.json?auth=' + token, this.studentService.getStudents());
  }

  getStudents() {
    const token = this.authService.getIdToken();

    this.http.get('https://ng-student.firebaseio.com/students.json?auth=' + token)
      .map(
        (response: Response) => {
          const students: Student[] = response.json();
          for (let student of students) {
            if (!student['ingredients']) {
              student['ingredients'] = [];
            }
          }
          return students;
        }
      )
      .subscribe(
        (students: Student[]) => {
          this.studentService.setStudents(students);
        }
      );
  }
}
