using System;
using Volo.Abp.Application.Dtos;

namespace Gymzii.Contacts;

public class ContactDto : AuditedEntityDto<Guid>
{
	public string Name { get; set; }
	public string LastName { get; set; }

	public string Email { get; set; }
	public ContactRole Role { get; set; }
}
