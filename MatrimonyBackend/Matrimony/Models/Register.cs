using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Matrimony.Models
{
    public class Register
    {

        public int Id { get; set; }

        public string Profilefor { get; set; }

        public string Name { get; set; }

        public string Gender { get; set; }

        public DateTime DOB { get; set; }

        public string Religion { get; set; }

        public string MotherTongue { get; set; }

        public string Phone { get; set; }

        public string EmailId { get; set; }

        public string Password { get; set; }

        public string Image { get; set; }

        public string MaritalStatus { get; set; }

        public string PhysicallyHandicapped { get; set; }

        public string DrinkingHabit { get; set; }

        public string SmokingHabit { get; set; }

        public string Diet { get; set; }

        public string BodyType { get; set; }

        public string Height { get; set; }

        public string FamilyStatus { get; set; }

        public string FamilyType { get; set; }

        public string FamilyValues { get; set; }

    //    public string Disability { get; set; }

        public string Education { get; set; }

        public string EmployedIn { get; set; }

        public string Occupation { get; set; }

        public string AnnualIncome { get; set; }

        public string LocationCountry { get; set; }

        public string LocationState { get; set; }

        public string LocationCity { get; set; }

        public string Weight { get; set; }

        public string Star { get; set; }

        public string Rasi { get; set; }

        public string TimeOfBirth { get; set; }

        public string PlaceOfBirthCountry { get; set; }

        public string PlaceOfBirthState { get; set; }

        public string PlaceOfBirthCity { get; set; }

        public string FatherOccupation { get; set; }

        public string MotherOccupation { get; set; }

        public string Brothers { get; set; }

        public string BrothersMarried { get; set; }

        public string Sisters { get; set; }

        public string SistersMarried { get; set; }

        public string ParentsContact { get; set; }

        public string AncestralOrigin { get; set; }

        public string LikedProfiles { get; set; }

        public string Paid { get; set; }

        public string Page1 { get; set; }

        public string Page2 { get; set; }

        public string Page3 { get; set; }

        public string ImagesList { get; set; }
    }
    public class Forget {

      public  string PhoneNo { get; set; }
      public  string NewPassword { get; set; }
      public  string ConfirmPassword { get; set; }
        
    }
    public class Images {
        public string Image { get; set; }
    }
    public class SetProfile {
        public string Url { get; set; }
        public string Phone { get; set; }
    }
}