import type { CaliasthenicDto, CreateUpdateCaliasthenicDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaliasthenicService {
  apiName = 'Default';
  

  create = (input: CreateUpdateCaliasthenicDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaliasthenicDto>({
      method: 'POST',
      url: '/api/app/caliasthenic',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/caliasthenic/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaliasthenicDto>({
      method: 'GET',
      url: `/api/app/caliasthenic/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CaliasthenicDto>>({
      method: 'GET',
      url: '/api/app/caliasthenic',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateCaliasthenicDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaliasthenicDto>({
      method: 'PUT',
      url: `/api/app/caliasthenic/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
