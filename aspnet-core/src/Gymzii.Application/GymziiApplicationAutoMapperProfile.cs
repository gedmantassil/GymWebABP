using AutoMapper;
using Gymzii.Contacts;
using Gymzii.Exercises;

namespace Gymzii;

public class GymziiApplicationAutoMapperProfile : Profile
{
    public GymziiApplicationAutoMapperProfile()
    {
        CreateMap<Exercise, ExerciseDto>();
        CreateMap<CreateUpdateExerciseDto, Exercise>();
        CreateMap<Contact, ContactDto>();
        CreateMap<CreateUpdateContactDto, Contact>();
    }
}
