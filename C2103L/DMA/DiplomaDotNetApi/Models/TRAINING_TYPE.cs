//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DiplomaDotNetApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class TRAINING_TYPE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TRAINING_TYPE()
        {
            this.Diplomata = new HashSet<DIPLOMA>();
            this.TRAINING_PROGRAM = new HashSet<TRAINING_PROGRAM>();
        }
    
        public int TrainingTypeID { get; set; }
        public string TrainingTypeCode { get; set; }
        public string TrainingTypeName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DIPLOMA> Diplomata { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TRAINING_PROGRAM> TRAINING_PROGRAM { get; set; }
    }
}
