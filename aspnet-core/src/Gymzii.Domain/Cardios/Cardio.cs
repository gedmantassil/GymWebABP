using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace Gymzii.Cardios;
public class Cardio : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }
    public CardioType Type { get; set; }
    public int MaxTimeHours { get; set; }
    public int MaxTimeMinutes { get; set; }
    public int MaxTimeSeconds { get; set; }
}
