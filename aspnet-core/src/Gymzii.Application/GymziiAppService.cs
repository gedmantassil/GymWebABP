using System;
using System.Collections.Generic;
using System.Text;
using Gymzii.Localization;
using Volo.Abp.Application.Services;

namespace Gymzii;

/* Inherit your application services from this class.
 */
public abstract class GymziiAppService : ApplicationService
{
    protected GymziiAppService()
    {
        LocalizationResource = typeof(GymziiResource);
    }
}
