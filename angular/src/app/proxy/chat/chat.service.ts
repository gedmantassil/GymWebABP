import type { ChatMessageDto, CreateChatMessageDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  apiName = 'Default';
  

  getCurrentUserId = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/app/chat/current-user-id',
    },
    { apiName: this.apiName,...config });
  

  getMessages = (userId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ChatMessageDto[]>({
      method: 'GET',
      url: `/api/app/chat/messages/${userId}`,
    },
    { apiName: this.apiName,...config });
  

  sendMessage = (input: CreateChatMessageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/chat/send-message',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
