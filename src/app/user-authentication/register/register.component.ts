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
    { label: 'CCS', value: 'CCS' },
    { label: 'CBM', value: 'CBM' },
    { label: 'CTE', value: 'CTE' },
    { label: 'COFES', value: 'COFES' },
    { label: 'LAB HIGH', value: 'LAB HIGH' },



  ];

  userTypes = [
    {label:'Student', value:'Student'},
    {label:'Counselor', value:'Counselor'},
    {label:'Administrator', value:'Administrator'},
  ]

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
      department: ['', Validators.required],
      idNumber: [''],
      email: ['', Validators.email],
      userType: ['', Validators.required]
    })
  }
}
