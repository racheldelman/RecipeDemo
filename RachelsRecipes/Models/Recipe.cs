﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RachelsRecipes.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Ingredients { get; set; }
        public string Directions { get; set; }
        public int AuthorId { get; set; }

        public Author Author { get; set; }
    }
}
