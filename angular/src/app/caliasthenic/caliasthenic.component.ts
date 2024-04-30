import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { CaliasthenicService, CaliasthenicDto, exerciseTypeOptions } from '@proxy/caliasthenics';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-caliasthenic',
  templateUrl: './caliasthenic.component.html',
  styleUrl: './caliasthenic.component.scss',
  providers: [ListService],
})
export class CaliasthenicComponent implements OnInit {
  caliasthenic = { items: [], totalCount: 0 } as PagedResultDto<CaliasthenicDto>;

  selectedCaliasthenic = {} as CaliasthenicDto;

  form: FormGroup;

  exerciseTypes = exerciseTypeOptions;

  isModalOpen = false;



  constructor(
    public readonly list: ListService, 
    private caliasthenicService: CaliasthenicService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {}

    ngOnInit() {
      const caliasthenicStreamCreator = (query) => this.caliasthenicService.getList(query);
  
      this.list.hookToQuery(caliasthenicStreamCreator).subscribe((response) => {
        this.caliasthenic = response;
      });
    }
    createCaliasthenic() {
      this.selectedCaliasthenic = {} as CaliasthenicDto;
      this.buildForm();
      this.isModalOpen = true;
    }
    editCaliasthenic(id: string) {
      this.caliasthenicService.get(id).subscribe((caliasthenic) => {
        this.selectedCaliasthenic = caliasthenic;
        this.buildForm();
        this.isModalOpen = true;
      });
    }

    buildForm() {
      this.form = this.fb.group({
        name: [this.selectedCaliasthenic.name || '', Validators.required],
        type: [this.selectedCaliasthenic.type || null, Validators.required],
        maxReps: [this.selectedCaliasthenic.maxReps || null, Validators.required],
        repsGoal: [this.selectedCaliasthenic.repsGoal || null, Validators.required],
      });
    }
    save() {
      if (this.form.invalid) {
        return;
      }
  
      const request = this.selectedCaliasthenic.id
        ? this.caliasthenicService.update(this.selectedCaliasthenic.id, this.form.value)
        : this.caliasthenicService.create(this.form.value);
  
      request.subscribe(() => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
      });
    }

    delete(id: string) {
      this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
        if (status === Confirmation.Status.confirm) {
          this.caliasthenicService.delete(id).subscribe(() => this.list.get());
        }
      });
    }
}
