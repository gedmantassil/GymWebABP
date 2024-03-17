using Gymzii.Samples;
using Xunit;

namespace Gymzii.EntityFrameworkCore.Applications;

[Collection(GymziiTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<GymziiEntityFrameworkCoreTestModule>
{

}
