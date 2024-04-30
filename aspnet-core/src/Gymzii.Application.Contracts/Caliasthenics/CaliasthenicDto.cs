using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Gymzii.Caliasthenics;
public class CaliasthenicDto : AuditedEntityDto<Guid>
{
	public string Name { get; set; }

	public ExerciseType Type { get; set; }

	public int MaxReps { get; set; }
	public int RepsGoal { get; set; }
}