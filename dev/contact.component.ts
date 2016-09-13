/**
 * Created by youweilu on 8/14/16.
 */
import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  template: `
      <div>
       Name: {{contact.firstName}} {{contact.lastName}}<br>
       Phone: {{contact.phone}}<br>
       Email: {{contact.email}}
      </div>
    `,
})
export class ContactComponent {

  public contact = {
    firstName: "John",
    lastName: "Smith",
    phone: "383838239",
    email: "john@gmail.com"
  }

}
