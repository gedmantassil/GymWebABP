import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { CardioService, CardioDto, cardioTypeOptions } from '@proxy/cardios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class CardioComponent implements OnInit {
  cardio = { items: [], totalCount: 0 } as PagedResultDto<CardioDto>;

  isModalOpen = false;
  form: FormGroup;
  cardioTypes = cardioTypeOptions;
  selectedCardio = {} as CardioDto;

  constructor(
    public readonly list: ListService,
    private cardioService: CardioService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit() {
    const cardioStreamCreator = (query) => this.cardioService.getList(query);
    this.list.hookToQuery(cardioStreamCreator).subscribe((response) => {
      this.cardio = response;
    });
  }

  createCardio() {
    this.selectedCardio = {} as CardioDto; // reset the selected book
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
  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.cardioService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
  formatDuration(minutes: number, seconds: number): string {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedCardio.name || '', Validators.required],
      type: [this.selectedCardio.type || null, Validators.required],
      maxTimeMinute: [this.selectedCardio.maxTimeMinute || 0, Validators.required],
      maxTimeSecond: [this.selectedCardio.maxTimeSecond || 0, Validators.required],
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
}
