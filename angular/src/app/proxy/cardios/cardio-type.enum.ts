import { mapEnumToOptions } from '@abp/ng.core';

export enum CardioType {
  Swimming = 0,
  Walking = 1,
  Cycling = 2,
  Rowing = 3,
  Boxing = 4,
  Elliptical = 5,
  Hiking = 6,
  Dance = 7,
  Jogging = 8,
  Undefined = 9,
}

export const cardioTypeOptions = mapEnumToOptions(CardioType);
