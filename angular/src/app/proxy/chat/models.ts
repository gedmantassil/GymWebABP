
export interface ChatMessageDto {
  senderId?: string;
  senderUserName?: string;
  receiverId?: string;
  receiverUserName?: string;
  message?: string;
  sentTime?: string;
}

export interface CreateChatMessageDto {
  receiverId?: string;
  receiverUserName?: string;
  message?: string;
}
