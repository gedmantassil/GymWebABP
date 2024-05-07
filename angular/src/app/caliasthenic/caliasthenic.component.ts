import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { CaliasthenicService, CaliasthenicDto, exerciseTypeOptions } from '@proxy/caliasthenics';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { ExerciseType } from '@proxy/caliasthenics';

@Component({
  selector: 'app-caliasthenic',
  templateUrl: './caliasthenic.component.html',
  styleUrls: ['./caliasthenic.component.scss'],
  providers: [ListService],
})
export class CaliasthenicComponent implements OnInit {
  caliasthenic = { items: [], totalCount: 0 } as PagedResultDto<CaliasthenicDto>;
  selectedCaliasthenic = {} as CaliasthenicDto;
  form: FormGroup;
  exerciseTypes = exerciseTypeOptions;
  isModalOpen = false;
  isGoalPopupOpen = false;

  constructor(
    public readonly list: ListService, 
    private caliasthenicService: CaliasthenicService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private dialog: MatDialog
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
    //debugger;
    this.caliasthenicService.get(id).subscribe((caliasthenic) => {
        this.selectedCaliasthenic = caliasthenic;
        this.buildForm();
        this.isModalOpen = true;

        this.form.valueChanges.subscribe(formValues => {
            // Update the selectedCaliasthenic with form changes
            this.selectedCaliasthenic = {...this.selectedCaliasthenic, ...formValues};
            if (formValues.maxReps > formValues.repsGoal) {
              console.log(formValues.maxReps);
                // this.showRepsGoalDialog(formValues.maxReps);
            }
        });
    });
}
  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedCaliasthenic.name || '', Validators.required],
      type: [this.selectedCaliasthenic.type !== undefined ? +this.selectedCaliasthenic.type : ExerciseType.Undefined, Validators.required],
      maxReps: [this.selectedCaliasthenic.maxReps || 0, [Validators.required, Validators.min(1)]],
      repsGoal: [this.selectedCaliasthenic.repsGoal || 0, [Validators.required, Validators.min(1)]],
    });
  }

  async save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedCaliasthenic.id
      ? this.caliasthenicService.update(this.selectedCaliasthenic.id, this.form.value)
      : this.caliasthenicService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      if (this.isGoalPopupOpen) {
        this.form.reset();
        this.isGoalPopupOpen = false;
      } else {
        this.showRepsGoalDialog(this.form.value.maxReps);

      }
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

//   showRepsGoalDialog(minRepsGoal: number) {
//     const dialogRef = this.dialog.open(InputDialogComponent, {
//         data: {
//             title: 'Update Reps Goal',
//             inputType: 'number',
//             placeholder: 'Enter new Reps Goal',
//             value: Math.max(this.selectedCaliasthenic.repsGoal, minRepsGoal),
//             min: minRepsGoal
//         },
//     });

//     dialogRef.afterClosed().subscribe(result => {
//         if (result !== undefined) {
//             const newRepsGoal = parseInt(result, 10); // Ensure it's treated as a number
//             console.log(newRepsGoal);
//             this.form.patchValue({ repsGoal: newRepsGoal });  // Update form control with new value
//             //this.saveUpdatedRepsGoal();  // Trigger the update method
//             this.save();
//         }
//     });
// }
showRepsGoalDialog(minRepsGoal: number) {
  this.isGoalPopupOpen = true;
  const dialogRef = this.dialog.open(InputDialogComponent, {
      data: {
          title: 'Update Reps Goal',
          inputType: 'number',
          placeholder: 'Enter new Reps Goal',
          value: Math.max(this.selectedCaliasthenic.repsGoal, minRepsGoal),
          min: minRepsGoal
      },
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
          const newRepsGoal = parseInt(result, 10); // Ensure it's treated as a number
          console.log('New Reps Goal:', newRepsGoal); // Debugging
          if (!isNaN(newRepsGoal)) { // Check if it's a valid number
              this.form.patchValue({ 
                  repsGoal: newRepsGoal,
                  name: this.selectedCaliasthenic.name,
                  type: this.selectedCaliasthenic.type,
                  maxReps: this.selectedCaliasthenic.maxReps
              });  // Update form control with new values
              // this.saveUpdatedRepsGoal();  // Trigger the update method
              this.save(); // Save the changes
          } else {
              console.error('Invalid value for Reps Goal:', result);
          }
      }
  });
}
private saveUpdatedRepsGoal() {
  if (this.form.valid) {
    this.caliasthenicService.update(this.selectedCaliasthenic.id, this.form.value)
    .subscribe({
        next: () => {
            this.isModalOpen = false;
            this.list.get(); // Refresh the list to show updated data
        },
        error: (error) => {
            console.error('Failed to update caliasthenic:', error);
        }
    });
  } else {
      console.error('Form is invalid:', this.form.errors);
  }
}
}