﻿using AutoMapper;
using Gymzii.Caliasthenics;
using Gymzii.Cardios;
using Gymzii.Chat;
using Gymzii.Contacts;
using Gymzii.Exercises;

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

        CreateMap<ChatMessage, ChatMessageDto>();
        CreateMap<CreateChatMessageDto, ChatMessage>();

        CreateMap<Cardio, CardioDto>();
        CreateMap<CreateUpdateCardioDto, Cardio>();
    }
}
