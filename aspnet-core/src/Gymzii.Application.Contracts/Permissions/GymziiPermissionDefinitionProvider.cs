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
        var booksPermission = myGroup.AddPermission(GymziiPermissions.Exercises.Default, L("Permission:Exercises"));
        booksPermission.AddChild(GymziiPermissions.Exercises.Create, L("Permission:Exercises.Create"));
        booksPermission.AddChild(GymziiPermissions.Exercises.Edit, L("Permission:Exercises.Edit"));
        booksPermission.AddChild(GymziiPermissions.Exercises.Delete, L("Permission:Exercises.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<GymziiResource>(name);
    }
}
