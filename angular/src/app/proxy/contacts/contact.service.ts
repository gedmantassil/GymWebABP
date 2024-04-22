import type { ContactDto, CreateUpdateContactDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiName = 'Default';
  

  create = (input: CreateUpdateContactDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContactDto>({
      method: 'POST',
      url: '/api/app/contact',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/contact/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContactDto>({
      method: 'GET',
      url: `/api/app/contact/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ContactDto>>({
      method: 'GET',
      url: '/api/app/contact',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateContactDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContactDto>({
      method: 'PUT',
      url: `/api/app/contact/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
