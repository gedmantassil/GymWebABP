using System;
using System.Collections.Generic;
using System.Text;

namespace Gymzii.Chat;
public class ChatMessageDto
{
    public Guid SenderId { get; set; }
    public string SenderUserName { get; set; }
    public Guid ReceiverId { get; set; }
    public string ReceiverUserName { get; set; }
    public string Message { get; set; }
    public DateTime SentTime { get; set; }
}

