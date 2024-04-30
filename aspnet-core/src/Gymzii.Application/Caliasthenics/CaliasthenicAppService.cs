using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Gymzii.Caliasthenics;
public class CaliasthenicAppService :
CrudAppService<
	Caliasthenic, 
	CaliasthenicDto, 
	Guid, 
	PagedAndSortedResultRequestDto, 
	CreateUpdateCaliasthenicDto>, 
ICaliasthenicAppService 
{
	public CaliasthenicAppService(IRepository<Caliasthenic, Guid> repository)
		: base(repository)
	{

	}
}