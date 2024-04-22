using System;
using System.ComponentModel.DataAnnotations;

namespace Gymzii.Contacts;

public class CreateUpdateContactDto
{
	[Required]
	[StringLength(128)]
	public string Name { get; set; } = string.Empty;
	[Required]
	[StringLength(128)]
	public string LastName { get; set; } = string.Empty;
	[Required]
	[StringLength(128)]
	public string Email { get; set; } = string.Empty;
	[Required]
	public ContactRole Role { get; set; } = ContactRole.Undefined;
}
