namespace Gymzii.Permissions;

public static class GymziiPermissions
{
    public const string GroupName = "Gymzii";

    //Add your own permission names. Example:
    //public const string MyPermission1 = GroupName + ".MyPermission1";
    public static class Exercises
    {
        public const string Default = GroupName + ".Exercises";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    public static class Caliasthenics
    {
        public const string Default = GroupName + ".Caliasthenics";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    public static class Cardios
    {
        public const string Default = GroupName + ".Cardios";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
