using AutoMapper;
using Gymzii.Caliasthenics;
using Gymzii.Contacts;
using Gymzii.Exercises;
using Gymzii.Cardios;

namespace Gymzii;

public class GymziiApplicationAutoMapperProfile : Profile
{
    public GymziiApplicationAutoMapperProfile()
    {
        //Dtos for Gym
        CreateMap<Exercise, ExerciseDto>();
        CreateMap<CreateUpdateExerciseDto, Exercise>();
        //Dtos for Contacts
        CreateMap<Contact, ContactDto>();
        CreateMap<CreateUpdateContactDto, Contact>();
        //Dtos for Caliasthenics
        CreateMap<Caliasthenic, CaliasthenicDto>();
        CreateMap<CreateUpdateCaliasthenicDto, Caliasthenic>();
        //Dtos for Cardios
        CreateMap<Cardio, CardioDto>();
        CreateMap<CreateUpdateCardioDto, Cardio>();
    }
}
