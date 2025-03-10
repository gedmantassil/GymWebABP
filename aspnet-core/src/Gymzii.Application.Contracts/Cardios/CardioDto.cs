﻿using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Gymzii.Cardios;
    public class CardioDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; }
    public CardioType Type { get; set; }
    public int MaxTimeHours { get; set; }
    public int MaxTimeMinutes { get; set; }
    public int MaxTimeSeconds { get; set; }
}
