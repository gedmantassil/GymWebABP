using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.Users;

namespace Gymzii.Chat;

public class ChatMessage : FullAuditedEntity<Guid>
{
    public Guid SenderId { get; set; }
    public string SenderUserName { get; set; }
    public Guid ReceiverId { get; set; }
    public string ReceiverUserName { get; set; }
    public string Message { get; set; }
    public DateTime SentTime { get; set; }
}
