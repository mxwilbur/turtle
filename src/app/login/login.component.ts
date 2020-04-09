import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent implements OnInit {

  constructor(private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService) {
    firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();
  }
  ngOnInit() {
  }
}