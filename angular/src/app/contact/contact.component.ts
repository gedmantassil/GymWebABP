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
  limitedContactItems: ContactDto[] = [];

  commentText: string = '';

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
      this.limitContactItems();
    });
  }
  limitContactItems() {
    //const totalItems = this.contact.items.length;
    //const startIndex = Math.max(totalItems - 4, 0); // Calculate the starting index for the last four items
    //this.limitedContactItems = this.contact.items.slice(startIndex,totalItems); // Get the last four items

    this.limitedContactItems = this.contact.items.filter(contact => contact.name !== '1'); 
  }
  
  

  buildForm(){
    this.form = this.fb.group({
      name: [this.selectedContact.name || '1'],
      lastName: [this.selectedContact.lastName || '1'],
      email: [this.selectedContact.email || '1'],
      role: [this.selectedContact.role || 0],
      comment: [this.selectedContact.comment || null, Validators.required]
    });
  }

  createComment(){
    this.commentText = "";
    this.buildForm();
    this.isModalOpen = true;
  }
  save() {
    if (this.form.invalid) {
      return;
    }
    const request= this.selectedContact.id ? 
    this.contactService.update(this.selectedContact.id, this.form.value) : this.contactService.create(this.form.value);

    request.subscribe(()=>{
      this.isModalOpen=false;
      this.form.reset();
      this.list.get();
    });
  }
  
  

}
