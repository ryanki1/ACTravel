using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AddCon_TravellingSalesman.Models;

namespace AddCon_TravellingSalesman.Models
{
    public class SalesmanModel//: IValidatableObject
    {

        //DataType.EmailAddress;
        //DataType.PhoneNumber;            

        [Key]
        //[DatabaseGenerated(DatabaseGenerationOption.Computed)]
        public int ID { get; set; }

        [Required]
        [Display(Name = "First Name")]        
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "E-Mail")]
        //[CustomValidation(typeof(AddCon_TravellingSalesman.Models.SalesmanModel),"Validate")]
        public string EMail { get; set; }

        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Tel")]
        public string Tel { get; set; }

        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Mob")]
        public string Mob { get; set; }

        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Fax")]
        public string Fax { get; set; }

        [Display(Name = "Latitude")]
        public decimal Latitude { get; set; }

        [Display(Name = "Longitude")]
        public decimal Longitude { get; set; }

        //public ValidationResult EachHasTheirOwnEmail(SalesmanModel SM) 
        //{

        //    ValidationResult vr = new ValidationResult("");
        //    AddConTravellingSalesmanContext context = new AddConTravellingSalesmanContext();

        //    var EmailInUse = context.SalesmanModels.Select(x => x.EMail == SM.EMail).Count();

        //    if (EmailInUse > 0)
        //    {
        //        vr.ErrorMessage = "This Email address is in use - please try another";
        //    }
        //    return vr;
        //}


        //public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        //{
        //    List<ValidationResult> result = new List<ValidationResult>();

        //    if (validationContext.MemberName == "EMail")
        //    {
        //        ValidationResult vr = EachHasTheirOwnEmail((SalesmanModel)validationContext.ObjectInstance);
        //        if (vr.ErrorMessage.Length > 0)
        //        {
        //            result.Add(vr);
        //        }
        //    }

        //    return result;
        //}
    }
}