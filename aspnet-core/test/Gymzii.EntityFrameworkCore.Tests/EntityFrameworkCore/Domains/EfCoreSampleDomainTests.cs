using Gymzii.Samples;
using Xunit;

namespace Gymzii.EntityFrameworkCore.Domains;

[Collection(GymziiTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<GymziiEntityFrameworkCoreTestModule>
{

}
