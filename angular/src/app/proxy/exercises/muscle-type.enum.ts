import { mapEnumToOptions } from '@abp/ng.core';

export enum MuscleType {
  Chest = 0,
  Back = 1,
  Biceps = 2,
  Triceps = 3,
  Abdominals = 4,
  Legs = 5,
  Shoulders = 6,
  Undefined = 7,
}

export const muscleTypeOptions = mapEnumToOptions(MuscleType);
