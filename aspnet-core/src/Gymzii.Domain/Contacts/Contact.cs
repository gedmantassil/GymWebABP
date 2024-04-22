using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace Gymzii.Contacts
{
	public class Contact : AuditedAggregateRoot<Guid>
	{
		public string Name { get; set; }
		public string LastName {  get; set; }

		public string Email { get; set; }
		public ContactRole Role { get; set; }
	}
}
