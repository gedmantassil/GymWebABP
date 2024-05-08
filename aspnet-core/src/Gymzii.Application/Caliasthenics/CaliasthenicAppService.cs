using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Microsoft.Extensions.Logging;
using Volo.Abp.Domain.Entities;
using Gymzii.Permissions;

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
	private readonly IRepository<Caliasthenic, Guid> _repository;
	private readonly ILogger<CaliasthenicAppService> _logger;

	public CaliasthenicAppService(IRepository<Caliasthenic, Guid> repository, ILogger<CaliasthenicAppService> logger)
		: base(repository)
	{
		_repository = repository;
		_logger = logger;

        GetPolicyName = GymziiPermissions.Caliasthenics.Default;
        GetListPolicyName = GymziiPermissions.Caliasthenics.Default;
        CreatePolicyName = GymziiPermissions.Caliasthenics.Create;
        UpdatePolicyName = GymziiPermissions.Caliasthenics.Edit;
        DeletePolicyName = GymziiPermissions.Caliasthenics.Delete;
    }

	public override async Task<CaliasthenicDto> UpdateAsync(Guid id, CreateUpdateCaliasthenicDto input)
	{
		_logger.LogInformation($"Received type: {input.Type}, Name: {input.Name}");

		var caliasthenic = await _repository.GetAsync(id);
		if (caliasthenic == null)
		{
			_logger.LogWarning($"Caliasthenic not found for ID: {id}");
			throw new EntityNotFoundException(typeof(Caliasthenic), id);
		}

		_logger.LogInformation($"Before Update - RepsGoal: {caliasthenic.RepsGoal}");
		ObjectMapper.Map(input, caliasthenic);
		await _repository.UpdateAsync(caliasthenic);
		_logger.LogInformation($"After Update - RepsGoal: {caliasthenic.RepsGoal}");

		return await MapToGetOutputDtoAsync(caliasthenic);
	}

}