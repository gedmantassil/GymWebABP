import { mapEnumToOptions } from '@abp/ng.core';

export enum ContactRole {
  FrontEnd = 0,
  BackEnd = 1,
  Tester = 2,
  Undefined = 3,
}

export const contactRoleOptions = mapEnumToOptions(ContactRole);
