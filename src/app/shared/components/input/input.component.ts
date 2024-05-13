import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
  @Input() id: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() controlName = '';
  @Input() control = new FormControl();

  ngOnInit(): void {
  }
}
