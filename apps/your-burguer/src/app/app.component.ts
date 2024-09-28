import { Component } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@Component({
  standalone: true,
  imports: [ShellComponent],
  selector: 'app-root',
  template: `<app-shell />`,
})
export class AppComponent {}
