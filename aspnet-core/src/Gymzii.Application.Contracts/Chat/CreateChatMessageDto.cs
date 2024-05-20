using System;
using System.Collections.Generic;
using System.Text;

namespace Gymzii.Chat;

public class CreateChatMessageDto
{
    public Guid ReceiverId { get; set; }
    public string ReceiverUserName { get; set; }
    public string Message { get; set; }
}
