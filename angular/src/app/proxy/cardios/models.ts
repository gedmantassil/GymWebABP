import type { AuditedEntityDto } from '@abp/ng.core';
import type { CardioType } from './cardio-type.enum';

export interface CardioDto extends AuditedEntityDto<string> {
  name?: string;
  type: CardioType;
  maxTimeMinute: number;
  maxTimeSecond: number;
}

export interface CreateUpdateCardioDto {
  name: string;
  type: CardioType;
  maxTimeMinute: number;
  maxTimeSecond: number;
}
