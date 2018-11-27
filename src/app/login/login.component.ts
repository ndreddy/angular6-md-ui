import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  username: string;
  password: string;

  ngOnInit() {
    this.auth.handleAuthentication();
  }

}

