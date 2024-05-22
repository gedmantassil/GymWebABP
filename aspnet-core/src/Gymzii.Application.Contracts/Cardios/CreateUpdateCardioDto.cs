using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Gymzii.Cardios;
    public class CreateUpdateCardioDto
    {
    [Required]
    [StringLength(128)]
    public string Name { get; set; } = string.Empty;
    [Required]
    public CardioType Type { get; set; } = CardioType.Undefined;

    [Required]
    public int MaxTimeHours { get; set; }
    [Required]
    public int MaxTimeMinutes { get; set;}
    [Required]
    public int MaxTimeSeconds { get; set;}
}
