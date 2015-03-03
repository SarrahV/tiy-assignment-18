function Vehicle() {
  this.Transports = true;
};

function Aircraft() {
  Vehicle.call(this);
  this.hasWings = true;
  this.Travel = function() {
    return "Bon Voyage";
  };
};

function SeaVessel() {
  Vehicle.call(this);
  this.hasRudder = true;
  this.Travel = function() {
    return "watch for icebergs!"
  };
};

function LandVehicle() {
  Vehicle.call(this);
  this.hasWheels = true;
};

function Boat() {
  SeaVessel.call(this);
  this.Sail = function() {
    return "smooth seas"
  };
};

function Car() {
  LandVehicle.call(this);
};

function Train() {
  LandVehicle.call(this);
};

function Plane() {
  Aircraft.call(this);
};

// Make aircraft, deavessel, and landvehicle an instance of vessel //
Aircraft.prototype = Object.create(Vehicle.prototype);

SeaVessel.prototype = Object.create(Vehicle.prototype);

LandVehicle.prototype = Object.create(Vehicle.prototype);

// Make plane an instance of Aircraft //
Plane.prototype = Object.create(Aircraft.prototype);

// Make boat an instance of SeaVessel //
Boat.prototype = Object.create(SeaVessel.prototype);

// Make car an instance of LandVehicle //
Car.prototype = Object.create(LandVehicle.prototype);

// Make train an instance of LandVehicle //
Train.prototype = Object.create(LandVehicle.prototype);



var extendee = {names: "confusing", brain: "hurts"};

var extended = _.extend(extendee);



function params(stuff) {
  var defaults = {
    page: 1
  }

  var options = _.extend({}, defaults, stuff);

  return options;
};








