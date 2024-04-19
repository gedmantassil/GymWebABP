import { Component } from '@angular/core';

interface MuscleGroup {
  name: string;
  exercises: string[];
} 

@Component({
  selector: 'app-exercise-selection',
  templateUrl: './exercise-selection.component.html',
  styleUrl: './exercise-selection.component.scss'
})

export class ExerciseSelectionComponent {
  isHeadHighlighted: boolean = true;
  isSixPackHighlighted: boolean = true;
  isBicepHighlighted: boolean = false;
  isTrapsHighlighted: boolean = false;
  isLegsHighlighted: boolean= false;
  isChestHighlighted: boolean= false;
  isShoulderHighlighted: boolean= false;
  isMidBackHighlighted: boolean= false;
  isHamstringHighlighted: boolean= false;
  isHipHighlighted: boolean= false;
  isLowerLatHighlighted: boolean= false;
  isQuadHighlighted: boolean= false;
  isForeArmHighlighted: boolean= false;
  isTricepHighlighted: boolean= false;
  isLowerBackHighlighted: boolean= false;
  isUpperLatsHighlighted: boolean= false;
  isCalvesHighlighted: boolean= false;
  isAbsHighlighted: boolean= false;
  isObliquesHighlighted: boolean= false;

  selectedMuscleGroup?: MuscleGroup;

  // List of exercises for each muscle group
  muscleGroupExercises: { [key: string]: string[] } = {
    biceps: ['Curl', 'Hammer Curl', 'Concentration Curl'],
    tricep: ['Tricep Pushdown', 'Overhead Tricep Extension', 'Skull Crushers'],
    traps: ['Deadlift', 'Schruggs'],
    chest: ['Bench press', 'Incline press', 'Chest Fleyes', 'Push ups'],
    shoulder: ['Military press', 'Arnold press', 'Dumbell raises'],
    midback: ['Dumbell rows', 'Cable rows', 'Deadlift'],
    hamstring: ['Deadlift', 'Hamstring curls'],
    // ...other muscle groups...
  };

  highlight(part: string) {
    if (part === 'head') {
      this.isHeadHighlighted = true;
    } else if (part === 'six-pack') {
      this.isSixPackHighlighted = true;
    }
    else if (part === 'biceps') {
      this.isBicepHighlighted = true;
    }
    else if (part === 'traps') {
      this.isTrapsHighlighted = true;
    }

    else if (part === 'legs') {
      this.isLegsHighlighted = true;
    }
    else if (part === 'chest') {
      this.isChestHighlighted = true;
    }
    else if (part === 'shoulder') {
      this.isShoulderHighlighted = true;
    }
    else if (part === 'midback') {
      this.isMidBackHighlighted = true;
    }
    else if (part === 'hamstring') {
      this.isHamstringHighlighted = true;
    }
    else if (part === 'hip') {
      this.isHipHighlighted = true;
    }
    else if (part === 'lower-lat') {
      this.isLowerLatHighlighted = true;
    }
    else if (part === 'quad') {
      this.isQuadHighlighted = true;
    }
    else if (part === 'forearm') {
      this.isForeArmHighlighted = true;
    }
    else if (part === 'tricep') {
      this.isTricepHighlighted = true;
    }
    else if (part === 'lowerback') {
      this.isLowerBackHighlighted = true;
    }
    else if (part === 'upperlat') {
      this.isUpperLatsHighlighted = true;
    }
    else if (part === 'calve') {
      this.isCalvesHighlighted = true;
    }
    else if (part === 'abs') {
      this.isAbsHighlighted = true;
    }
    else if (part === 'oblique') {
      this.isObliquesHighlighted = true;
    }
  }

  unhighlight(part: string) {
    if (part === 'head') {
      this.isHeadHighlighted = false;
    } else if (part === 'six-pack') {
      this.isSixPackHighlighted = false;
    }
    else if (part === 'biceps') {
      this.isBicepHighlighted = false;
    }
    else if (part === 'traps') {
      this.isTrapsHighlighted = false;
    }
    else if (part === 'legs') {
      this.isLegsHighlighted = false;
    }
    else if (part === 'chest') {
      this.isChestHighlighted = false;
    }
    else if (part === 'shoulder') {
      this.isShoulderHighlighted = false;
    }
    else if (part === 'midback') {
      this.isMidBackHighlighted = false;
    }
    else if (part === 'hamstring') {
      this.isHamstringHighlighted = false;
    }
    else if (part === 'hip') {
      this.isHipHighlighted = false;
    }
    else if (part === 'lower-lat') {
      this.isLowerLatHighlighted= false;
    }
    else if (part === 'quad') {
      this.isQuadHighlighted= false;
    }
    else if (part === 'forearm') {
      this.isForeArmHighlighted= false;
    }
    else if (part === 'tricep') {
      this.isTricepHighlighted= false;
    }
    else if (part === 'lowerback') {
      this.isLowerBackHighlighted= false;
    }
    else if (part === 'upperlat') {
      this.isUpperLatsHighlighted= false;
    }
    else if (part === 'calve') {
      this.isCalvesHighlighted= false;
    }
    else if (part === 'abs') {
      this.isAbsHighlighted= false;
    }
    else if (part === 'oblique') {
      this.isObliquesHighlighted= false;
    }
  }


  showTable: boolean = false;

  onMuscleGroupClick(part: string) {
    this.showTable = true; 
    this.selectedMuscleGroup = {
      name: part.charAt(0).toUpperCase() + part.slice(1), // Capitalize the first letter
      exercises: this.muscleGroupExercises[part] || []
    };
  }
  
  closeTable() {
      this.showTable = false; // Hide the table when the close button is clicked
    }
    
  
}
