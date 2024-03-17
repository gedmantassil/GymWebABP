using Volo.Abp.Modularity;

namespace Gymzii;

public abstract class GymziiApplicationTestBase<TStartupModule> : GymziiTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
