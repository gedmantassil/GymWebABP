using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Gymzii.Contacts;

public class ContactAppService :
	CrudAppService<
		Contact,
		ContactDto,
		Guid,
		PagedAndSortedResultRequestDto,
		CreateUpdateContactDto>,
	IContactAppService
{
	public ContactAppService(IRepository<Contact, Guid> repository) : base(repository)
	{

	}
}
