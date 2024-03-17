using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Gymzii.Data;

/* This is used if database provider does't define
 * IGymziiDbSchemaMigrator implementation.
 */
public class NullGymziiDbSchemaMigrator : IGymziiDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
