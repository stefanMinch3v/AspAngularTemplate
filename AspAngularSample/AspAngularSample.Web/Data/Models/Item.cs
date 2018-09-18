namespace AspAngularSample.Web.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Item
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public int Quantity { get; set; }

        public DateTime DateOfAdded { get; set; }
    }
}
