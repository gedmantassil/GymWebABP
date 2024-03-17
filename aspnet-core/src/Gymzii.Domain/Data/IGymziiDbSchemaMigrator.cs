using System.Threading.Tasks;

namespace Gymzii.Data;

public interface IGymziiDbSchemaMigrator
{
    Task MigrateAsync();
}
