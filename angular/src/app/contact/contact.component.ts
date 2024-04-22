import { Component } from '@angular/core';
import { ContactDto } from '@proxy/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  selectedContact = {} as ContactDto;
}
