
// 1) 
//   a)
class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  const movie1 = new Movie("leo", "DreamWarrrior", "R-4.5/5" );
  const movie2 = new Movie("KGF", "Hombale Pictures", "R-4/5");
  
  console.log(movie1);
  console.log(movie2);

// b)
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  const Movie = new Movie("Inception", "Warner Bros.");
  const Movie = new Movie("The Shawshank Redemption", "Columbia Pictures", "R");
  
  console.log(Movie); 
  console.log(Movie);

//   c)

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  const getPG = function(movies) {
    return movies.filter(movie => movie.rating === "PG");
  };

  const movie4 = new Movie("Inception", "Warner Bros.", "PG");
  const movie5 = new Movie("The Shawshank Redemption", "Columbia Pictures", "R");
  const movie6 = new Movie("Finding Nemo", "Pixar Animation Studios", "PG");
  
  const movieArray = [movie4, movie5, movie6];
  
  const pgMovies = getPG(movieArray);
  
  console.log(pgMovies);


// 3)
class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    getDetails() {
      return `${this.name}, ${this.age},  ${this.address}`;
    }
  }
  const person1 = new Person("John Doe", 25, "123 Main Street, Cityville");
  const person2 = new Person("Jane Smith", 30, "456 Oak Avenue, Townsville");
  
  console.log(person1.getDetails());
  console.log(person2.getDetails());


//   4)

class UberCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
      const distanceCost = distance * this.costPerKilometer;
      const timeCost = time * this.costPerMinute;
      const totalCost = this.baseFare + distanceCost + timeCost;
  
      return totalCost;
    }
  }
  const uberInstance = new UberCalculator(5, 1.5, 0.2); 
  const distance = 10;
  const time = 15; 
  
  const totalPrice = uberInstance.calculatePrice(distance, time);
  console.log(`Uber Price: $${totalPrice}`);