import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() selectLabel: string = '';
  @Input() items: any[] = [];
  @Input() control = new FormControl();

  showMenu = false;
  selected: any;

  select(item) {
    this.selected = item;
    this.showMenu = false;
    this.control.setValue(item.value)
  }
}
