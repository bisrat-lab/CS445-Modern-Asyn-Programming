const User = function (name) {
  this.name = name;
  this.log = () => console.log("User: " + this.name);
};
const user2 = new User("bisrat");
//! instade of doing user2.state we can create decorator function;
const DecoratedUser = function (user, city, state) {
  this.name = user.name;
  this.city = city;
  this.state = state;
  this.log = () =>
    console.log(`User: ${this.name}, ${this.city}, ${this.state}`);
};
const user = new User("Asaad");
user.log();
const decorated = new DecoratedUser(user, "Fairfield", "Iowa");
decorated.log();
