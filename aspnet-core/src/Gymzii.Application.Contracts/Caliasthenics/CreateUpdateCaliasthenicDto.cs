using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;


namespace Gymzii.Caliasthenics;
public class CreateUpdateCaliasthenicDto
{
    [Required]
	[StringLength(128)]
	public string Name { get; set; } = string.Empty;

	[Required]
	public ExerciseType Type { get; set; } = ExerciseType.Undefined;

	[Required]
	public int MaxReps { get; set; }
	[Required]
	public int RepsGoal { get; set; }
}
