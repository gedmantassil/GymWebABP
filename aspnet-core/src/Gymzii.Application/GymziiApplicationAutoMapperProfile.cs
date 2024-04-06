using AutoMapper;
using Gymzii.Exercises;

namespace Gymzii;

public class GymziiApplicationAutoMapperProfile : Profile
{
    public GymziiApplicationAutoMapperProfile()
    {
        CreateMap<Exercise, ExerciseDto>();
        CreateMap<CreateUpdateExerciseDto, Exercise>();
    }
}
