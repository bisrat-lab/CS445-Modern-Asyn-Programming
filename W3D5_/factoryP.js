function Mahler(options) {
  this.clef = options.clef || "treble";
  this.signature = options.signature || "4-flat";
  this.tempo = options.tempo || 75;
}
function Bruckner(options) {
  this.clef = options.clef || "bass";
  this.tone = options.tone || "aria";
}
let createMelody = function (options) {
    if(options.clef ==="treble"){
        return new Mahler(options);
    }else if(options.clef ==="bass"){
        return new Bruckner(options);
    }
};
const melody = createMelody({
  clef: "treble",
  signature: "1-flat",
  tempo: 102,
});
console.log(melody)

//!Example 2
function Car(option){
    this.type = option.type || "car";
    this.doors = option.doors || 4;
    this.state = option.state || "brand New";
    this.color = option.color || "silver";
}

function Truck(option){
    this.type = option.type || "truck";
    this.state = option.state || "used";
    this.wheelSize = option.wheelSize || "large";
    this.color = option.color || "blue";
}

let vehicleFactory = function(option){
   if(option.type ==="car"){
       return new Car(option)
   }else if(option.type ==="truck"){
    return new Truck(option) 
   }
}
const vehicle = vehicleFactory({
    type : 'car',
    doors : 4,
    state: "like new",
    color: "black"
})
console.log(vehicle);

//
function FullTime(option){
    this.type = type || "full"
    this.hourly = "$12";
}
function PartTime(option){
    this.type = type || "part"
    this.hourly = "$11";
}
function PRN(option){
    this.type = type || "prn"
    this.hourly = "$10";
}

let employeeHourly = function(option){
     if(option.type ==="full"){
        return new FullTime(option)
     }else if(option.type ==="full"){
        return new PartTime(option)
     }else if(option.type ==="prn"){
         return new PRN(option)
     }
}
//==========================================
function Factory(){
    this.createEmp = function(option){
        
         if(option ==="full"){
            return new FullTime()
         }else if(option ==="full"){
            return new PartTime()
         }else if(option ==="prn"){
             return new PRN()
         }
    }
}
function FullTime(){
    this.hourly = "$12";
}
function PartTime(){
    this.hourly = "$11";
}
function PRN(){
    this.hourly = "$10";
}

let factory = new Factory()
let e1 = factory.createEmp("prn");
console.log(e1)