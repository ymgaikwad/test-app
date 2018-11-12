import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../../student.model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student;
  @Input() index: number;

  ngOnInit() {
  }
}
