using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace razor.Pages
{
    public class TestModel : PageModel
    {
        public string Message = "Test";

        public void OnGet()
        {

        }
    }
}