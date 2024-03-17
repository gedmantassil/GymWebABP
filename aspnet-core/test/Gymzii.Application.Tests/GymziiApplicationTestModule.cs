using Volo.Abp.Modularity;

namespace Gymzii;

[DependsOn(
    typeof(GymziiApplicationModule),
    typeof(GymziiDomainTestModule)
)]
public class GymziiApplicationTestModule : AbpModule
{

}
