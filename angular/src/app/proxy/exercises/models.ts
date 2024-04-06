import type { MuscleType } from './muscle-type.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateExerciseDto {
  name: string;
  type: MuscleType;
  maxWeight: number;
}

export interface ExerciseDto extends AuditedEntityDto<string> {
  name?: string;
  type: MuscleType;
  maxWeight: number;
}
