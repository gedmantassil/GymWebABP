using Gymzii.Exercises.Tests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Gymzii.EntityFrameworkCore.Applications.Exercises;

[Collection(GymziiTestConsts.CollectionDefinitionName)]
public class EfCoreBookAppService_Tests : ExercisesAppService_Tests<GymziiEntityFrameworkCoreTestModule>
{

}
