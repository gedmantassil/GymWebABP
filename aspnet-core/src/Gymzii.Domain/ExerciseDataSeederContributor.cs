using Gymzii.Exercises;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace Gymzii
{
    public class ExerciseDataSeederContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Exercise, Guid> _exerciseRepository;

        public ExerciseDataSeederContributor(IRepository<Exercise, Guid> bookRepository)
        {
            _exerciseRepository = bookRepository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _exerciseRepository.GetCountAsync() <= 0)
            {
                await _exerciseRepository.InsertAsync(
                    new Exercise
                    {
                        Name = "Bench press",
                        Type = MuscleType.Chest,
                        MaxWeight = 100
                    },
                    autoSave: true
                ) ;

                await _exerciseRepository.InsertAsync(
                    new Exercise
                    {
                        Name = "Curls",
                        Type = MuscleType.Biceps,
                        MaxWeight = 10
                    },
                    autoSave: true
                );
            }
        }
        }
}
