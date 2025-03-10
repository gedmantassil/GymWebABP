﻿using Gymzii.Exercises;
using Gymzii.Contacts;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using Gymzii.Caliasthenics;
using Gymzii.Chat;
using Gymzii.Cardios;

namespace Gymzii.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class GymziiDbContext :
    AbpDbContext<GymziiDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */
    public DbSet<Exercise> Exercises { get; set; }
    public DbSet<Contact> Contacts { get; set; }

    public DbSet<Caliasthenic> Caliasthenics { get; set; }
    public DbSet<ChatMessage> ChatMessages { get; set; }

    public DbSet<Cardio> Cardios {  get; set; }
    #region Entities from the modules

    /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityDbContext and ITenantManagementDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion

    public GymziiDbContext(DbContextOptions<GymziiDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        /* Configure your own tables/entities inside here */

        builder.Entity<Exercise>(b =>
        {
            b.ToTable(GymziiConsts.DbTablePrefix + "Exercises",
                GymziiConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
        });

		builder.Entity<Contact>(b =>
		{
			b.ToTable(GymziiConsts.DbTablePrefix + "Contact",
				GymziiConsts.DbSchema);
			b.ConfigureByConvention(); //auto configure for the base class props
			b.Property(x => x.Name).IsRequired().HasMaxLength(128);
		});

		builder.Entity<Caliasthenic>(b =>
		{
			b.ToTable(GymziiConsts.DbTablePrefix + "Caliasthenic",
				GymziiConsts.DbSchema);
			b.ConfigureByConvention(); //auto configure for the base class props
			b.Property(x => x.Name).IsRequired().HasMaxLength(128);
		});
        builder.Entity<ChatMessage>(b =>
        {
            b.ToTable("ChatMessages");
            b.ConfigureByConvention();
        });

        builder.Entity<Cardio>(b =>
        {
            b.ToTable(GymziiConsts.DbTablePrefix + "Cardio",
                GymziiConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
        });
    }
}
