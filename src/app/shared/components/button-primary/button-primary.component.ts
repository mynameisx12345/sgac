import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {
  @Input() type: 'primary' | 'secondary' | 'warn' = 'primary';
  @Input() text: string = '';
  @Input() disabled = false;
}
