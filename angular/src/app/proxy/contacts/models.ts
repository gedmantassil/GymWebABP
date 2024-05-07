import type { AuditedEntityDto } from '@abp/ng.core';
import type { ContactRole } from './contact-role.enum';

export interface ContactDto extends AuditedEntityDto<string> {
  name?: string;
  lastName?: string;
  email?: string;
  role: ContactRole;
}

export interface CreateUpdateContactDto {
  name: string;
  lastName: string;
  email: string;
  role: ContactRole;
}
