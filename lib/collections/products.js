Products = [
  {
    "sku" : "strawberry-cheesecake",
    "name" : "Exquisite Strawberry Cheesecake",
    "image" : "cheesecake.jpg",
    "summary" : "Our favorite strawberry cheesecake, with our classic recipe.",
    "description" : "If you are looking for the perfect treat after a nice meal, this is it.",
    "price" : 25,
    "vendor" : {
      "id" : 1,
      "slug" : "FaveCakes",
      "name" : "Fave Cakes, Ltd"
    }

  },
  
  {
    "sku" : "godiva",
    "name" : "Godiva Favorites Box",
    "image" : "godiva.jpg",
    "summary" : "Our favorite selection of Godiva chocolates.",
    "description" : "If you are looking for the perfect dark chocolate, maybe with a glass of red wine, look no further than this assorted box from Godiva.",
    "price" : 20,
    "vendor" : {
      "id" : 2,
      "slug" : "FaveCakes",
      "name" : "Fave Cakes, Ltd"
    }
  },

  {
    "sku" : "chocolate-cheesecake",
    "name" : "Rich Chocolate Cheesecake",
    "image" : "chocolate-cake.jpg",
    "summary" : "Want best of both worlds? The chocolate cheesecake!",
    "description" : "Like our classic strawberry cheesecake, our chocolate recipe is a family classic. With the rich texture of the chocolate we use as well as the richness of the cake, we think it will be a hit with you as well.",
    "price" : 23,
    "vendor" : {
      "id" : 3,
      "slug" : "FaveCakes",
      "name" : "Fave Cakes, Ltd"
    }
  }

]


Products.featured = function(){
  var featuredSkus = ["strawberry-cheesecake", "godiva", "chocolate-cheesecake"];
  return _.filter(Products, function(product){
    return featuredSkus.indexOf(product.sku) > -1;
  });

};
