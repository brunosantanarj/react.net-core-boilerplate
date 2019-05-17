using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using react_dotnet.Models;

namespace react_dotnet.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CorretorModel> _corretores;
        private static Random rnd = new Random();
        static HomeController()
        {
            _corretores = new List<CorretorModel>
            {
                new CorretorModel
                {
                    Id = rnd.Next(100, 5888),
                    Name = "Bruno Santana", 
                    Text = "Corretor experiente",

                },
                new CorretorModel
                {
                    Id = rnd.Next(100, 89374),
                    Name = "Ana Paula",
                    Text = "Corretora com 50 anos",

                },
                new CorretorModel
                {
                    Id = rnd.Next(1, 98233),
                    Name = "Geovana",
                    Text = "Corretora com pouca experiência",

                },
            };
        }

        [Route("corretores")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Corretores()
        {
            return Json(_corretores);
        }

        [Route("corretores/more")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult MaisCorretores()
        {
            return Json(new List<CorretorModel>
            {
                new CorretorModel
                {
                    Id = rnd.Next(100, 5888),
                    Name = "Guilherme", 
                    Text = "Corretor intermediário",

                },
                new CorretorModel
                {
                    Id = rnd.Next(100, 89374),
                    Name = "Sofia",
                    Text = "Corretora nova",

                },
                new CorretorModel
                {
                    Id = rnd.Next(1, 98233),
                    Name = "Leona",
                    Text = "Corretora Animal",

                },
            });
        }

        public IActionResult Index()
        {
            ViewBag.corretores = _corretores;
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
