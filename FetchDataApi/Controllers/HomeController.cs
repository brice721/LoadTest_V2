using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FetchDataApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() =>
            Redirect("~/App/LoadTest/dist/index.html");
    }
}
