using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace Gymzii.Exercises;
public class Exercise : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public MuscleType Type { get; set; }
    public int MaxWeight { get; set; }
}
