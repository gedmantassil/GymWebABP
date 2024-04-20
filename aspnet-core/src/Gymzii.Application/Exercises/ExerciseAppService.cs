using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
        public ExerciseAppService(IRepository<Exercise, Guid> repository) :base(repository)
        {
            GetPolicyName = GymziiPermissions.Exercises.Default;
            GetListPolicyName = GymziiPermissions.Exercises.Default;
            CreatePolicyName = GymziiPermissions.Exercises.Create;
            UpdatePolicyName = GymziiPermissions.Exercises.Edit;
            DeletePolicyName = GymziiPermissions.Exercises.Delete;
        }
    }
}
