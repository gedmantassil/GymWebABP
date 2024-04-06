import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ExerciseService, ExerciseDto, muscleTypeOptions, MuscleType } from '@proxy/exercises';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [ListService],
})
export class ExerciseComponent implements OnInit {
  exercise = { items:[], totalCount: 0} as PagedResultDto<ExerciseDto>;
  form: FormGroup;
  exerciseTypes = muscleTypeOptions;

  isModalOpen = false;

  constructor(public readonly list: ListService, private exerciseService: ExerciseService, private fb: FormBuilder){}

  ngOnInit() {
    const exerciseStreamCreator = (query) => this.exerciseService.getList(query);

    this.list.hookToQuery(exerciseStreamCreator).subscribe((response) => {
      this.exercise = response;
    });
  }

  createExercise(){
    this.buildForm();
    this.isModalOpen = true;
  }
  buildForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      MuscleType: [null, Validators.required],
      maxWeight: [null, Validators.required],

    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    this.exerciseService.create(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

}
