using Gymzii.Cardios;
using System;
using System.ComponentModel.DataAnnotations;

namespace Gymzii.Cardios;

public class CreateUpdateCardioDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;

    [Required]
    public CardioType Type { get; set; } = CardioType.Undefined;

    [Required]
    public int MaxTimeMinute { get; set; } = 0;
    [Required]
    public int MaxTimeSecond { get; set; } = 0;
}