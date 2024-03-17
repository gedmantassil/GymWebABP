using Volo.Abp.Settings;

namespace Gymzii.Settings;

public class GymziiSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(GymziiSettings.MySetting1));
    }
}
