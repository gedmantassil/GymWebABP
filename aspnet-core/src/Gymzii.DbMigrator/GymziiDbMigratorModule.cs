using Gymzii.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Gymzii.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(GymziiEntityFrameworkCoreModule),
    typeof(GymziiApplicationContractsModule)
    )]
public class GymziiDbMigratorModule : AbpModule
{
}
