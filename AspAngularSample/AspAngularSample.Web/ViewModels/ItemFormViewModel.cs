namespace AspAngularSample.Web.ViewModels
{
    using System.ComponentModel.DataAnnotations;

    public class ItemFormViewModel
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public int Quantity { get; set; }
    }
}
