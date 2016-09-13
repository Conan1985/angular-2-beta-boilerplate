/**
 * Created by youweilu on 8/14/16.
 */
import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component'

@Component({
  selector: 'contact-list',
  template: `
      <ul>
        <li *ngFor="#contact of contacts" (click)="onSelect(contact)" 
[class.clicked] = "selectedContact === contact">
          {{contact.lastName}}, {{contact.firstName}}
        </li>  
      </ul>
      <div>
        Phone: {{selectedContact.phone}}<br>
        Email: {{selectedContact.email}}
      </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent {

  public contacts = [
    {
    firstName: "John",
    lastName: "Smith",
    phone: "383838239",
    email: "john@gmail.com"
    },
    {
      firstName: "Robert",
      lastName: "Miles",
      phone: "000000000",
      email: "robert@gmail.com"
    },
    {
      firstName: "Andy",
      lastName: "rhodes",
      phone: "453453453",
      email: "andy@gmail.com"
    },
    {
      firstName: "Ricky",
      lastName: "Ponting",
      phone: "44433344",
      email: "ricky@gmail.com"
    },
    {
      firstName: "Adnan",
      lastName: "Khan",
      phone: "1234568",
      email: "adnan@gmail.com"
    }
  ];

  public selectedContact = {};

  onSelect(contact) {
    this.selectedContact = contact;

  }

}
