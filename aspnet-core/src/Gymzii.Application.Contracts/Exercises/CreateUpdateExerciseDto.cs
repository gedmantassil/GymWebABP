using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Gymzii.Exercises
{
    public class CreateUpdateExerciseDto
    {
        [Required]
        [StringLength(128)]
        public string Name { get; set; } = string.Empty;

        [Required]
        public MuscleType Type { get; set; } = MuscleType.Undefined;

        [Required]
        public int MaxWeight { get; set; }
    }
}
