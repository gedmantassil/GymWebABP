using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Gymzii.Exercises
{
    public interface IExerciseAppService: ICrudAppService<
        ExerciseDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateExerciseDto
        >
    {

    }
}
