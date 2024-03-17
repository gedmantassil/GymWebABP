using Xunit;

namespace Gymzii.EntityFrameworkCore;

[CollectionDefinition(GymziiTestConsts.CollectionDefinitionName)]
public class GymziiEntityFrameworkCoreCollection : ICollectionFixture<GymziiEntityFrameworkCoreFixture>
{

}
