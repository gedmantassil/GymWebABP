
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.Users;

namespace Gymzii.Chat;


public class ChatAppService : ApplicationService, IChatAppService
{
    private readonly IRepository<ChatMessage, Guid> _chatMessageRepository;
    private readonly IAsyncQueryableExecuter _asyncQueryableExecuter;
    private readonly ICurrentUser _currentUser;


    public ChatAppService(IRepository<ChatMessage, Guid> chatMessageRepository, IAsyncQueryableExecuter asyncQueryableExecuter, ICurrentUser currentUser)
    {
        _chatMessageRepository = chatMessageRepository;
        _asyncQueryableExecuter = asyncQueryableExecuter;
        _currentUser = currentUser;
    }

    public async Task SendMessageAsync(CreateChatMessageDto input)
    {
        if (!_currentUser.Id.HasValue)
        {
            throw new InvalidOperationException("Current user ID is null.");
        }


        Logger.LogInformation("Current user ID: {UserId}", CurrentUser.Id);
        Logger.LogInformation("Current user name: {UserName}", CurrentUser.UserName);

        var chatMessage = new ChatMessage
        {
            SenderId = _currentUser.Id.Value,
            SenderUserName = _currentUser.UserName,
            ReceiverId = input.ReceiverId,
            ReceiverUserName = input.ReceiverUserName,
            Message = input.Message,
            SentTime = DateTime.Now
        };

        await _chatMessageRepository.InsertAsync(chatMessage);
    }


    public async Task<List<ChatMessageDto>> GetMessagesAsync(Guid userId)
    {
        var queryable = await _chatMessageRepository.GetQueryableAsync();

        var query = queryable
            .Where(m => m.ReceiverId == userId || m.SenderId == userId)
            .OrderByDescending(m => m.SentTime);

        var messages = await _asyncQueryableExecuter.ToListAsync(query);

        return ObjectMapper.Map<List<ChatMessage>, List<ChatMessageDto>>(messages);
    }
    public Guid? GetCurrentUserId()
    {
        return _currentUser.Id;
    }

}