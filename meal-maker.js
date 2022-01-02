const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    },

    //Getter and setter methods for retrieving and adding dishes to courses
      get appetizers() {
        return this._courses['appetizers'];
      },
      set appetizers(appetizerIn) {
        this._courses['appetizers'].push(appetizerIn);
      },
      get mains() {
        return this._courses['mains'];
      },
      set mains(mainsIn) {
        this._courses['mains'].push(mainsIn);
      },
      get dessert() {
        return this._courses['desserts'];
      },
      set dessert(dessertsIn) {
        this._courses['desserts'].push(mainsIn);
      },

      //Getter method to retrieve a courses
      get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        };
      },

      //Add dishes to the course with a course name, dish name and price
      addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice
        }
        this._courses[courseName].push(dish);
      },

      //Retrieves added dishes randomly from courses
      getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },

      //Creates meals randomly from courses and calculate total cost
      generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price + mains.price + desserts.price;
        return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.price}. The total cost is $${totalPrice}.`;
      }
}

//Add dishes to courses
menu.addDishToCourse('appetizers','Kakro', 0.50);
menu.addDishToCourse('mains','Jollof Rice', 10);
menu.addDishToCourse('desserts','Emuduro', 1);

menu.addDishToCourse('appetizers','Akla', 2);
menu.addDishToCourse('mains','Angwa Mo', 5);
menu.addDishToCourse('desserts','Nkate cake', 2);

menu.addDishToCourse('appetizers','Kuli-Kuli', 1);
menu.addDishToCourse('mains','Waakye', 8);
menu.addDishToCourse('desserts','Boflot', 2);

//Create a meal from courses
let meal = menu.generateRandomMeal();
console.log(meal);
