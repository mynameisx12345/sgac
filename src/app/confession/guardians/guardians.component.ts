import { Component } from '@angular/core';

@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.component.html',
  styleUrls: ['./guardians.component.scss']
})
export class GuardiansComponent {
  guardians = [
    {id: 1, name: 'Juan Dela Cruz'},
    {id: 2, name: 'Leonardo Da Vinci'},
    {id: 3, name: 'Stewie Griffin'},
    {id: 4, name: 'Brian Griffin'},
    {id: 1, name: 'Juan Dela Cruz'},
    {id: 2, name: 'Leonardo Da Vinci'},
    {id: 3, name: 'Stewie Griffin'},
    {id: 4, name: 'Brian Griffin'},
    {id: 1, name: 'Juan Dela Cruz'},
    {id: 2, name: 'Leonardo Da Vinci'},
    {id: 3, name: 'Stewie Griffin'},
    {id: 4, name: 'Brian Griffin'},
    {id: 1, name: 'Juan Dela Cruz'},
    {id: 2, name: 'Leonardo Da Vinci'},
    {id: 3, name: 'Stewie Griffin'},
    {id: 4, name: 'Brian Griffin'},
    {id: 1, name: 'Juan Dela Cruz'},
    {id: 2, name: 'Leonardo Da Vinci'},
    {id: 3, name: 'Stewie Griffin'},
    {id: 4, name: 'Brian Griffin'},


  ]

  selectedGuardian:any;
}
