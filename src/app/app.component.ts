import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'student';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA8lsMhLbRNkv6ogPK_hfCYGZpQn-m_rk8",
      authDomain: "ng-student.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
