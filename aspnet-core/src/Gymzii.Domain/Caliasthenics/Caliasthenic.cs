using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace Gymzii.Caliasthenics;
public class Caliasthenic : AuditedAggregateRoot<Guid>
{
	public string Name { get; set; }

	public ExerciseType Type { get; set; }

	public int MaxReps { get; set; }
	public int RepsGoal {  get; set; }
}
