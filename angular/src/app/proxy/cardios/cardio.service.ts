import type { CardioDto, CreateUpdateCardioDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardioService {
  apiName = 'Default';
  

  create = (input: CreateUpdateCardioDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CardioDto>({
      method: 'POST',
      url: '/api/app/cardio',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/cardio/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CardioDto>({
      method: 'GET',
      url: `/api/app/cardio/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CardioDto>>({
      method: 'GET',
      url: '/api/app/cardio',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateCardioDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CardioDto>({
      method: 'PUT',
      url: `/api/app/cardio/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
