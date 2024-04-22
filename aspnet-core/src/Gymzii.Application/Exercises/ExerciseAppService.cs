using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Gymzii.Permissions;

namespace Gymzii.Exercises
{
    public class ExerciseAppService : 
            CrudAppService<
                Exercise,
                ExerciseDto,
                Guid,
                PagedAndSortedResultRequestDto,
                CreateUpdateExerciseDto>, 
                IExerciseAppService
    {
		private readonly IRepository<Exercise, Guid> _exerciseRepository;

		public ExerciseAppService(IRepository<Exercise, Guid> repository) :base(repository)
        {
			_exerciseRepository = repository;
			GetPolicyName = GymziiPermissions.Exercises.Default;
			GetListPolicyName = GymziiPermissions.Exercises.Default;
			CreatePolicyName = GymziiPermissions.Exercises.Create;
			UpdatePolicyName = GymziiPermissions.Exercises.Edit;
			DeletePolicyName = GymziiPermissions.Exercises.Delete;
		}
		public async Task<ExerciseDto> CreateOrUpdateExerciseAsync(CreateUpdateExerciseDto input)
		{
			Exercise exercise;
			var existingExercise = await _exerciseRepository.FirstOrDefaultAsync(e => e.Name == input.Name);

			if (existingExercise != null)
			{
				if (input.MaxWeight > existingExercise.MaxWeight)
				{
					existingExercise.MaxWeight = input.MaxWeight;
					exercise = await _exerciseRepository.UpdateAsync(existingExercise);
				}
				else
				{
					return ObjectMapper.Map<Exercise, ExerciseDto>(existingExercise);
				}
			}
			else
			{
				exercise = ObjectMapper.Map<CreateUpdateExerciseDto, Exercise>(input);
				await _exerciseRepository.InsertAsync(exercise);
			}

			return ObjectMapper.Map<Exercise, ExerciseDto>(exercise);
		}
	}
 }
    

