import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ExerciseService, ExerciseDto, muscleTypeOptions } from '@proxy/exercises';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [ListService],
})
export class ExerciseComponent implements OnInit {
  exercise = { items:[], totalCount: 0} as PagedResultDto<ExerciseDto>;

  selectedExercise = {} as ExerciseDto;

  form: FormGroup;
  muscleTypes = muscleTypeOptions;

  isModalOpen = false;

  constructor(
    public readonly list: ListService, 
    private exerciseService: ExerciseService, 
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ){}

  ngOnInit() {
    const exerciseStreamCreator = (query) => this.exerciseService.getList(query);

    this.list.hookToQuery(exerciseStreamCreator).subscribe((response) => {
      this.exercise = response;
    });
  }

  createExercise(){
    debugger;
    this.selectedExercise = {} as ExerciseDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editExercise(id: string){
    this.exerciseService.get(id).subscribe((exercise) => {
      this.selectedExercise = exercise;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm(){
    this.form = this.fb.group({
      name: [this.selectedExercise.name || '', Validators.required],
      type: [this.selectedExercise.type || null, Validators.required],
      maxWeight: [this.selectedExercise.maxWeight || null, Validators.required],

    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const request = this.selectedExercise.id
      ? this.exerciseService.update(this.selectedExercise.id, this.form.value)
      : this.exerciseService.createOrUpdateExercise(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: string){
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status == Confirmation.Status.confirm){
        this.exerciseService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

}
