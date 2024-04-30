using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Gymzii.Caliasthenics;

public interface ICaliasthenicAppService :
	ICrudAppService<
		CaliasthenicDto, 
		Guid,
		PagedAndSortedResultRequestDto, 
		CreateUpdateCaliasthenicDto> 
{

}