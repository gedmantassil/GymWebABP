using Gymzii.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Gymzii.Permissions;

public class GymziiPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(GymziiPermissions.GroupName, L("Permission:Gymzii"));
        //Define your own permissions here. Example:
        //myGroup.AddPermission(GymziiPermissions.MyPermission1, L("Permission:MyPermission1"));
        var exercisesPermission = myGroup.AddPermission(GymziiPermissions.Exercises.Default, L("Permission:Exercises"));
        exercisesPermission.AddChild(GymziiPermissions.Exercises.Create, L("Permission:Exercises.Create"));
        exercisesPermission.AddChild(GymziiPermissions.Exercises.Edit, L("Permission:Exercises.Edit"));
        exercisesPermission.AddChild(GymziiPermissions.Exercises.Delete, L("Permission:Exercises.Delete"));

        var caliasthenicsPermission = myGroup.AddPermission(GymziiPermissions.Caliasthenics.Default, L("Permission:Caliasthenics"));
        caliasthenicsPermission.AddChild(GymziiPermissions.Caliasthenics.Create, L("Permission:Caliasthenics.Create"));
        caliasthenicsPermission.AddChild(GymziiPermissions.Caliasthenics.Edit, L("Permission:Caliasthenics.Edit"));
        caliasthenicsPermission.AddChild(GymziiPermissions.Caliasthenics.Delete, L("Permission:Caliasthenics.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<GymziiResource>(name);
    }
}
