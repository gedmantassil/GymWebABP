using Gymzii.Contacts;
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
        private readonly IRepository<Contact, Guid> _contactRepository;

        public ExerciseDataSeederContributor(IRepository<Exercise, Guid> bookRepository, IRepository<Contact, Guid> contactRepository)
        {
            _exerciseRepository = bookRepository;
			_contactRepository = contactRepository;
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
            
            if(await _contactRepository.GetCountAsync() <= 0)
            {
                await _contactRepository.InsertAsync(
                    new Contact
                    {
                        Name = "Gedmantas",
                        LastName = "Šilinskas",
                        Email = "gedma456@gmail.com",
                        Role = ContactRole.BackEnd
                    },
                    autoSave: true
                    );
				await _contactRepository.InsertAsync(
					new Contact
					{
						Name = "Rugilė",
						LastName = "Jovaišaitė",
						Email = "rugjov@gmail.com",
						Role = ContactRole.FrontEnd
					},
					autoSave: true
					);
				await _contactRepository.InsertAsync(
					new Contact
					{
						Name = "Rokas",
						LastName = "Gudžiūnas",
						Email = "rokgud@gmail.com",
						Role = ContactRole.FrontEnd
					},
					autoSave: true
					);
				await _contactRepository.InsertAsync(
					new Contact
					{
						Name = "Simona",
						LastName = "Gerikaitė",
						Email = "simona.gerikaite@gmail.com",
						Role = ContactRole.FrontEnd
					},
					autoSave: true
					);
			}

        }
        }
}
