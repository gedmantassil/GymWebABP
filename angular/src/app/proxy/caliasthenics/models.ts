import type { AuditedEntityDto } from '@abp/ng.core';
import type { ExerciseType } from './exercise-type.enum';

export interface CaliasthenicDto extends AuditedEntityDto<string> {
  name?: string;
  type: ExerciseType;
  maxReps: number;
  repsGoal: number;
}

export interface CreateUpdateCaliasthenicDto {
  name: string;
  type: ExerciseType;
  maxReps: number;
  repsGoal: number;
}
