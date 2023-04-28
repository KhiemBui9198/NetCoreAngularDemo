using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreAngularDemo.Repos.Configuration
{
    public class UserConfiguration: IEntityTypeConfiguration<IdentityUser>
    {
        public void Configure(EntityTypeBuilder<IdentityUser> builder)
        {
            builder.HasData(
            new IdentityUser
            {
                Email = "chikhiemkm9198@gmail.com",
                Id = "0",
                UserName = "Administrator",
                EmailConfirmed = true,
                PhoneNumber = "1234567890"
            });
        }
    }
}
