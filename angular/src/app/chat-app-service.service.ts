import { Injectable } from '@angular/core';
import { ChatService } from '@proxy/chat'; // Adjust the path as needed
import { CreateChatMessageDto } from '@proxy/chat'; // Adjust the path as needed
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatAppService {
  constructor(private chatAppService: ChatService) {}

  async sendMessage(receiverId: string, receiverUserName: string, message: string) {
    const createChatMessageDto: CreateChatMessageDto = {
      receiverId,
      receiverUserName,
      message,
    };

    return await lastValueFrom(this.chatAppService.sendMessage(createChatMessageDto));
  }

  async getMessages(userId: string) {
    return await lastValueFrom(this.chatAppService.getMessages(userId));
  }

  getCurrentUserId() {
    return this.chatAppService.getCurrentUserId();
  }
}