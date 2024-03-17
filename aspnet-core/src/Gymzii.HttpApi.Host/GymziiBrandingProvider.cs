using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Gymzii;

[Dependency(ReplaceServices = true)]
public class GymziiBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Gymzii";
}
