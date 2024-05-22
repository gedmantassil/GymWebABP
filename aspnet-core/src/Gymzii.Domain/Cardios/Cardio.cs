using Gymzii.Cardios;
using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace Gymzii.Cardios;

public class Cardio : AuditedAggregateRoot<Guid>
{
    public string Name { get; set; }

    public CardioType Type { get; set; }

    public int MaxTimeMinute { get; set; }
    public int MaxTimeSecond { get; set; }
}