// DAY_6 : OOPS TASK

//Question 1 : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

/*Class - Movie

The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” */

class Movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new Movie("Casino Royale", "Eon Productions");


console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);

console.log(movie2.rating);

/*----------------------------------------------------------------------------------------------------*/

//Question 2 : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
            this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);


/*----------------------------------------------------------------------------------------------------*/

//Question 3 : Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Santhosh", "Srinivasan", "29-9-2001" , "Kumbakonam");
var person2 = new Person("Surya", "Gunasekaran", "1-1-2002" , "Mannargudi");
var person3 = new Person("Shiyam", "Gowtham", "4-6-2002" , "Vadaseri");
var person4 = new Person("Shaikh Muhibudeen", "Abdhul Salam", "20-10-2001" , "Qatar");
var person5 = new Person("SuryaKumar", "Sathiyan", "28-7-2002" , "Thanjavur");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)

/*----------------------------------------------------------------------------------------------------*/

//Question 4 : write a class to calculate the uber price.

class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0; // Distance in kilometers
  const timeInMinutes = 10; // Time in minutes
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
