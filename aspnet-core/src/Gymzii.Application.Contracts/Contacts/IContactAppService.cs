using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Gymzii.Contacts;

public interface IContactAppService:
	ICrudAppService<
		ContactDto,
		Guid,
		PagedAndSortedResultRequestDto,
		CreateUpdateContactDto>
{
}
