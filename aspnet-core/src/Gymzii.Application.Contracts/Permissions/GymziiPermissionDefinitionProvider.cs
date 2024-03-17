using Gymzii.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Gymzii.Permissions;

public class GymziiPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(GymziiPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(GymziiPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<GymziiResource>(name);
    }
}
