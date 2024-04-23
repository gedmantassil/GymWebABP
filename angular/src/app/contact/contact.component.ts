import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { ListService, PagedResultDto } from '@abp/ng.core';
import { ContactService, ContactDto, contactRoleOptions } from '@proxy/contacts';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [ListService],
})
export class ContactComponent implements OnInit{

  contact = { items:[], totalCount: 0} as PagedResultDto<ContactDto>;

  selectedContact = {} as ContactDto;

  form: FormGroup;
  contactRoles = contactRoleOptions;

  isModalOpen = false;
  constructor(
    public readonly list: ListService, 
    private contactService: ContactService, 
    private fb: FormBuilder,
  ){}

  ngOnInit() {
    const contactStreamCreator = (query) => this.contactService.getList(query);

    this.list.hookToQuery(contactStreamCreator).subscribe((response) => {
      this.contact = response;
    });
  }

  buildForm(){
    this.form = this.fb.group({
      name: [this.selectedContact.name || '', Validators.required],
      lastName: [this.selectedContact.lastName || '', Validators.required],
      email: [this.selectedContact.email || '', Validators.required],
      role: [this.selectedContact.role || null, Validators.required],

    });
  }
}
