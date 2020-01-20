using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace apiAirplane.Model
{
    [DataContract]
    public class airplaneModel : Base
    {
        public airplaneModel()
        {
            ID = Guid.NewGuid();
        }

        [DataMember]
        public Guid ID { get; set; }

        public string Code { get; set; }

        public string Model { get; set; }

        public string Quantity { get; set; }

        public DateTime Created { get; set; }
    }
}
