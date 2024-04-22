using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using Moq;
using Shouldly;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Xunit;
using Gymzii.Exercises;
using AutoMapper.Internal.Mappers;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectMapping;
using NSubstitute;
using Volo.Abp.Identity;


namespace Gymzii.Exercises.Tests;

public abstract class ExercisesAppService_Tests<TStartupModule> : GymziiApplicationTestBase<TStartupModule>
	where TStartupModule : IAbpModule

{
	private readonly IExerciseAppService _userAppService;
	private readonly IRepository<Exercise, Guid> _userAppRepository;
	protected ExercisesAppService_Tests()
	{
		_userAppService = GetRequiredService<IExerciseAppService>();
		_userAppRepository = GetRequiredService<IRepository<Exercise, Guid>>();
	}
	[Fact]
	public async Task Should_Update_Existing_Exercise_If_New_MaxWeight_Is_Greater()
	{
		// Arrange
		//var exerciseAppService = GetRequiredService<IExerciseAppService>();
		//var exerciseRepository = GetRequiredService<IRepository<Exercise, Guid>>();

		var exerciseAppService = _userAppService;
		var exerciseRepository = Substitute.For<IRepository<Exercise, Guid>>();

		var input = new CreateUpdateExerciseDto { Name = "Test Exercise", Type = MuscleType.Biceps, MaxWeight = 100 };
		var existingExercise = new Exercise()
		{
			Name = "Test Exercise",
			Type = MuscleType.Biceps,
			MaxWeight = 50
		};
			exerciseRepository.FirstOrDefaultAsync(e => e.Name == input.Name).Returns(existingExercise);

		// Act
		var result = await exerciseAppService.CreateOrUpdateExerciseAsync(input);

		// Assert
		result.ShouldNotBeNull();
		result.MaxWeight.ShouldBe(input.MaxWeight);
	}

	[Fact]
	public async Task Should_Return_Existing_Exercise_If_New_MaxWeight_Is_Not_Greater()
	{
		// Arrange
		var exerciseAppService = GetRequiredService<IExerciseAppService>();
		var exerciseRepository = Substitute.For<IRepository<Exercise, Guid>>();

		var input = new CreateUpdateExerciseDto { Name = "Test Exercise", Type = MuscleType.Triceps, MaxWeight = 50 };
		var existingExercise = new Exercise()
		{
			Name = "Test Exercise",
			Type = MuscleType.Triceps,
			MaxWeight = 50
		};
		exerciseRepository.FirstOrDefaultAsync(e => e.Name == input.Name).Returns(existingExercise);

		// Act
		var result = await exerciseAppService.CreateOrUpdateExerciseAsync(input);

		// Assert
		result.ShouldNotBeNull();
		result.MaxWeight.ShouldBe(existingExercise.MaxWeight);
	}

	[Fact]
	public async Task Should_Insert_New_Exercise_If_No_Existing_Exercise_With_Same_Name()
	{
		// Arrange
		var exerciseAppService = GetRequiredService<IExerciseAppService>();
		var exerciseRepository = Substitute.For<IRepository<Exercise, Guid>>();

		var input = new CreateUpdateExerciseDto { Name = "New Exercise", MaxWeight = 100 };
		Exercise nullExercise = null;
		exerciseRepository.FirstOrDefaultAsync(e => e.Name == input.Name).Returns(nullExercise);

		// Act
		var result = await exerciseAppService.CreateOrUpdateExerciseAsync(input);

		// Assert
		result.ShouldNotBeNull();
		result.Name.ShouldBe(input.Name);
		result.MaxWeight.ShouldBe(input.MaxWeight);
	}
	[Fact]
	public async Task Should_Correctly_Map_Fields_When_Inserting_New_Exercise()
	{
		// Arrange
		var exerciseAppService = _userAppService;
		var exerciseRepository = Substitute.For<IRepository<Exercise, Guid>>();

		var input = new CreateUpdateExerciseDto { Name = "Unique Exercise", Type = MuscleType.Legs, MaxWeight = 150 };
		Exercise nullExercise = null;
		exerciseRepository.FirstOrDefaultAsync(e => e.Name == input.Name).Returns(nullExercise);

		exerciseRepository.InsertAsync(Arg.Do<Exercise>(exercise =>
		{
			exercise.Name.ShouldBe(input.Name);
			exercise.Type.ShouldBe(input.Type);
			exercise.MaxWeight.ShouldBe(input.MaxWeight);
		})).Returns(Task.FromResult(new Exercise()));

		// Act
		var result = await exerciseAppService.CreateOrUpdateExerciseAsync(input);

		// Assert
		result.ShouldNotBeNull();
	}
}