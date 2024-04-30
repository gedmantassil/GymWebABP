import { mapEnumToOptions } from '@abp/ng.core';

export enum ExerciseType {
  Undefined = 0,
  Back = 1,
  Chest = 2,
  Arms = 3,
  Shoulders = 4,
  Legs = 5,
  Core = 6,
}

export const exerciseTypeOptions = mapEnumToOptions(ExerciseType);
