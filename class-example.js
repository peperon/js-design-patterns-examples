// A car class exmaple
function Car( model ) {
  this.model = model;
  this.color = "silver";
  this.year = "2014";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };
}

// instance initialization and use

var car = new Car("opel");

car.year = "2010";

console.log( car.getInfo() );
