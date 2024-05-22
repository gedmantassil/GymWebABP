import type { AuditedEntityDto } from '@abp/ng.core';
import type { CardioType } from './cardio-type.enum';

export interface CardioDto extends AuditedEntityDto<string> {
  name?: string;
  type: CardioType;
  maxTimeHours: number;
  maxTimeMinutes: number;
  maxTimeSeconds: number;
}

export interface CreateUpdateCardioDto {
  name: string;
  type: CardioType;
  maxTimeHours: number;
  maxTimeMinutes: number;
  maxTimeSeconds: number;
}
