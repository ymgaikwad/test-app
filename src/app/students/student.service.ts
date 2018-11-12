import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Student } from './student.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class StudentService {
  studentsChanged = new Subject<Student[]>();

  private students: Student[] = [
    new Student(
      'john',
      'michel',
      'doe',
      'Abc street, wakad road, pune'),
    new Student('frank',
      'scot',
      'doe',
      'wbc street, nagar road, pune')
  ];


  setStudents(students: Student[]) {
    this.students = students;
    this.studentsChanged.next(this.students.slice());
  }

  getStudents() {
    return this.students.slice();
    //this.dataStorageService.getStudents();
  }

  getStudent(index: number) {
    return this.students[index];
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.studentsChanged.next(this.students.slice());
  }

  updateStudent(index: number, newStudent: Student) {
    this.students[index] = newStudent;
    this.studentsChanged.next(this.students.slice());
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.studentsChanged.next(this.students.slice());
  }
}
