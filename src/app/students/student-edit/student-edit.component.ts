import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: number;
  editMode = false;
  studentForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.studentService.updateStudent(this.id, this.studentForm.value);
    } else {
      this.studentService.addStudent(this.studentForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.studentForm.get('ingredients')).controls;
  }

  private initForm() {
    let studentFirstName = '';
    let studentMiddleName = '';
    let studentLastName = '';
    let studentAddress = '';

    if (this.editMode) {
      const student = this.studentService.getStudent(this.id);
      studentFirstName = student.firstName;
      studentMiddleName = student.middleName;
      studentLastName = student.lastName;
      studentAddress = student.address;

    }

    this.studentForm = new FormGroup({
      'firstName': new FormControl(studentFirstName, Validators.required),
      'middleName': new FormControl(studentMiddleName, Validators.required),
      'lastName': new FormControl(studentLastName, Validators.required),
      'address': new FormControl(studentAddress, Validators.required),
    });
  }

}
