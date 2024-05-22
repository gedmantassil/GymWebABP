import { mapEnumToOptions } from '@abp/ng.core';

export enum CardioType {
  Undefined = 0,
  Swimming = 1,
  HIIT = 2,
  Hiking = 3,
  Boxing = 4,
  Cycling = 5,
  Burpee = 6,
  Dance = 7,
  Treadmill = 8,
}

export const cardioTypeOptions = mapEnumToOptions(CardioType);
