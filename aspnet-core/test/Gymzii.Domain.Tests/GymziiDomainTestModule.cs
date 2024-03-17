using Volo.Abp.Modularity;

namespace Gymzii;

[DependsOn(
    typeof(GymziiDomainModule),
    typeof(GymziiTestBaseModule)
)]
public class GymziiDomainTestModule : AbpModule
{

}
