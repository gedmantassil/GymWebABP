using Volo.Abp.Modularity;

namespace Gymzii;

/* Inherit from this class for your domain layer tests. */
public abstract class GymziiDomainTestBase<TStartupModule> : GymziiTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
