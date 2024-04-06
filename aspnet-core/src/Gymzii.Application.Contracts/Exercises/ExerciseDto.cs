using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Gymzii.Exercises
{
    public class ExerciseDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }

        public MuscleType Type { get; set; }
        public int MaxWeight { get; set; }
    }
}
