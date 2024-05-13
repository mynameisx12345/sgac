import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  fgRegister:any;
  constructor(
    private readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}
  departments = [
    { label: 'CCS', value: 'ccs' },
    { label: 'Dept2', value: 'dept2' },
  ];

  goBack() {
    this.location.back();
  }

  register(){
   this.router.navigate(['/auth/login'])
  }

  ngOnInit(): void {
    this.fgRegister = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required]
    })
  }
}
