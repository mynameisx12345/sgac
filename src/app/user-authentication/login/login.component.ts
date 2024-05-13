import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fgLogin: any;
  constructor(private readonly router: Router,
    private readonly fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.fgLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  goToRegister(){
    this.router.navigate(['/auth/register']);
  }

  login(){
    this.router.navigate(['/confession/confess'])
  }
}
