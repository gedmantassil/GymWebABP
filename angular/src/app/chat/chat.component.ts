import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../chat-app-service.service';
import { IdentityUserService } from '@abp/ng.identity/proxy';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  receiverId: string = '';
  receiverUserName: string = '';
  message: string = '';
  currentUserId: string;
  constructor(private chatService: ChatAppService, private userService: IdentityUserService) {}

  ngOnInit(): void {
    this.chatService.getCurrentUserId().subscribe(userId => {
      userId = userId.replace(/"/g, "").toUpperCase();
      this.currentUserId = userId;
      console.log('Current User ID:', this.currentUserId); 
      this.loadMessages(this.currentUserId);
    });
  }

  loadMessages(userId: string) {
    this.chatService
      .getMessages(userId)
      .then((messages) => {
        this.messages = messages;
      })
      .catch((error) => {
        console.error('Error loading messages', error);
      });
  }

  sendMessage() {
    this.userService.findByUsername(this.receiverUserName).subscribe(rcvrId => {
      this.receiverId = rcvrId.id.toUpperCase();
      this.chatService
      .sendMessage(this.receiverId, this.receiverUserName, this.message)
      .then(() => {
        console.log('Message sent successfully');
        this.message = '';
        this.chatService.getCurrentUserId().subscribe(userId => {
          userId = userId.replace(/"/g, "").toUpperCase();
          this.currentUserId = userId;
          console.log('Current User ID:', this.currentUserId); 
          this.loadMessages(this.currentUserId);
        }); 
      })
      .catch((error) => {
        console.error('Error sending message', error);
      });
    });
  }
}