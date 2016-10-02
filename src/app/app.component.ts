import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  directives: [HeaderComponent]
})
export class AppComponent {
}
