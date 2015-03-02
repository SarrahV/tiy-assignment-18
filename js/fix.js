function Vehicle() {

};

function Aircraft() {
  Vehicle.call(this);
};

function SeaVessel() {
  Vehicle.call(this);
};

function LandVehicle() {
  Vehicle.call(this);
};

function Boat() {
  SeaVessel.call(this);
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









