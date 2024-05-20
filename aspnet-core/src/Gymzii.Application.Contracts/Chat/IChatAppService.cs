using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Gymzii.Chat;
public interface IChatAppService : IApplicationService
{
    Task SendMessageAsync(CreateChatMessageDto input);
    Task<List<ChatMessageDto>> GetMessagesAsync(Guid userId);
}

