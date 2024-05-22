using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Gymzii.Cardios;

public interface ICardioAppService :
    ICrudAppService<
        CardioDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateCardioDto>
{

}