import { Component } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { CardioService, CardioDto, cardioTypeOptions } from '@proxy/cardios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrl: './cardio.component.scss',
  providers: [ListService],
})
export class CardioComponent {
  cardio = { items: [], totalCount: 0 } as PagedResultDto<CardioDto>;
  form: FormGroup;
  selectedCardio = {} as CardioDto;
  cardioTypes = cardioTypeOptions;
  isModalOpen = false
  constructor(public readonly list: ListService, private cardioService: CardioService, private fb: FormBuilder, private confirmation: ConfirmationService) {}

  ngOnInit() {
    const cardioStreamCreator = (query) => this.cardioService.getList(query);

    this.list.hookToQuery(cardioStreamCreator).subscribe((response) => {
      this.cardio = response;
    });
  }
  createCardio() {
    this.selectedCardio = {} as CardioDto;
    this.buildForm(); 
    this.isModalOpen = true;
  }
  editCardio(id: string) {
    this.cardioService.get(id).subscribe((cardio) => {
      this.selectedCardio = cardio;
      this.buildForm();
      this.isModalOpen = true;
    });
  }
  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedCardio.name || '', Validators.required],
      type: [this.selectedCardio.type || null, Validators.required],
      maxTimeHours: [this.selectedCardio.maxTimeHours || null, Validators.required],
      maxTimeMinutes: [this.selectedCardio.maxTimeMinutes || null, Validators.required],
      maxTimeSeconds: [this.selectedCardio.maxTimeSeconds || null, Validators.required],
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedCardio.id
      ? this.cardioService.update(this.selectedCardio.id, this.form.value)
      : this.cardioService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.cardioService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
