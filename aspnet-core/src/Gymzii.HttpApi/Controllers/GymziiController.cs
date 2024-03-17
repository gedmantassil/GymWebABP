using Gymzii.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Gymzii.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class GymziiController : AbpControllerBase
{
    protected GymziiController()
    {
        LocalizationResource = typeof(GymziiResource);
    }
}
