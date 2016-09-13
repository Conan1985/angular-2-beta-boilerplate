import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";
import {ContactListComponent} from './contact-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <ul>
          <contact-list></contact-list>
        </ul>
    `,
  directives: [ContactListComponent]
})
export class AppComponent {

}
