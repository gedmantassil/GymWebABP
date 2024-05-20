import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chatbubble.component.html',
  styleUrls: ['./chatbubble.component.scss']
})
export class ChatBubbleComponent {
  isChatVisible = false;

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }
}