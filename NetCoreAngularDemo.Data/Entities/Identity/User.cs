﻿using Microsoft.AspNetCore.Identity;

namespace NetCoreAngularDemo.Data.Entities.Identity
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
