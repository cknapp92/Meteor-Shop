Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'

});

Router.route("/", {
  name : "homeIndex",

});

Router.route("/about", {
  name : "homeAbout"

});


Router.route("/contact", {
  name : "homeContact"

});

Router.route("/products/:sku", {
 name: "product",
 data : function(){

 	var sku = this.params.sku;
 	return _.find(Products. function)
 }



})