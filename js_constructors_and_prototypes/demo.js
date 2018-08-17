// Demo: ArrayExtras

function first(arr) {
  return arr[0];
}

const ArrayExtras = {
  // `last` is a property whose value is a function.
  // This makes it a method.
  last: function last(arr) {
    return arr[arr.length - 1];
  },
  // You can also assign an existing function to a
  // property to make a method.
  first: first,
  // You can use a short-hand syntax to create method
  // where the `function` keyword is not necessary.
  // You can only use this "syntax sugar"
  // when creating methods.
  take(arr, n) {
    return arr.slice(0, n);
  },
  // take: (arr, n) => arr.slice(0, n)
  // Exercise: toObject
  toObject(arr) {
    let newObj = {};

    // for (let val of arr) {
    //   newObj[val[0]] = val[1];
    // }
    // This is array destructuring assignment
    // syntax. It allows to assign values of array
    // by their position to multiple variables at a time.
    for (let [key, val] of arr) {
      newObj[key] = val;
    }

    return newObj;
  }
};

// Keyword "this"

// Demo: A Counter
// Exercise: Configurable Steps

// counter.set(10).inc().inc().inc().now()
// To be able to do the above, that is chaining
// method after method. Return "this" from the methods
// that you want to make chainable.
const counter = {
  count: 0,
  step: 1,
  inc() {
    this.count += this.step;
    return this;
  },
  dec() {
    this.count -= this.step;
    return this;
  },
  set(newCount) {
    this.count = newCount;
    return this;
  },
  setStep(newStep) {
    this.step = newStep;
    return this;
  },
  now() {
    return this.count;
  }
};

// Demo: Can Touch This

console.log("Inside script:", this);

const can = {
  taloupe: "Hello!",
  touchThis() {
    return this;
  }
};

console.log("Inside method can.touchThis():", can.touchThis());

function whatAboutMe() {
  return this;
}

console.log("Inside a lone function:", whatAboutMe());

can.whatAboutMe = whatAboutMe;

console.log("As a method of can:", can.whatAboutMe());
// `this` is determined at the time a function is called.
// If a function is now owned by an object, `this` will
// be that object. If a method is now a lone function
// and is no longer owned by an object, `this` will
// be the `window` or `undefined`.

const outside = can.touchThis;

console.log("A former method now a function:", outside());

// Constructors

if (false) {
  function Doggo(name, age) {
    // When a function is used as a constructor,
    // its `this` is empty object that is
    // an instance of the constructor.
    // console.log(this);

    // Warning: A constructor can be used as regular function,
    // but its `this` will be `window` or `undefined`
    this.name = name;
    this.age = age;
  }

  // usage:

  // To use a function as a constructor, prefix
  // calling the function with the `new` keyword.
  const sonicSam = new Doggo("Sonic Sam", 9);

  // Demo: Doggo Learned Bark

  Doggo.prototype.bark = function() {
    return `${this.name} barks "Bork-bork!"`;
  };

  // The `prototype` is an object that containers a
  // property `constructor` that is assigned the
  // constructor.

  // This object is used as the `prototype` of any
  // instance created by the constructor. It's not
  // the `prototype` of the constructor.

  sonicSam.__proto__; // {bark: ƒ, constructor: ƒ}
  Doggo.__proto__; // ƒ () { [native code] }
  Doggo.__proto__ === sonicSam.__proto__; // false
  Doggo.prototype === sonicSam.__proto__; // true
  Doggo.__proto__ === Function.prototype; // true
}

// Inheritance
// Demo: Model Doggo Fighter

if (false) {
  function Doggo(name, age) {
    this.name = name;
    this.age = age;
  }

  Doggo.prototype.bark = function() {
    return `${this.name} barks "Bork-bork!"`;
  };

  function DoggoFighter(name, age, specialAbility) {
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  // DoggoFighter.prototype = new Doggo();
  Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

  DoggoFighter.prototype.fight = function(doggo) {
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)];
    return `${winner} won!`;
  };

  // usage:

  const bobBuilder = new Doggo("Bob Builder", 11);
  const sonicSam = new DoggoFighter("Sonic Sam", 8, "Screech!");

  sonicSam.fight(bobBuilder);
  sonicSam.bark();
  bobBuilder.bark();

  // To check if an object is an instance of constructor,
  // use the `instanceof` keyword. It will also work with
  // inheritance.
  [] instanceof Array; // true
  [] instanceof Doggo; // false
  sonicSam instanceof Doggo; // true
  sonicSam instanceof Object; // true
}

// Demo: Doggos go to Class

class Doggo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    return `${this.name} barks "Bork-bork!"`;
  }
}

class DoggoFighter extends Doggo {
  constructor(name, age, specialAbility) {
    // `super` is a keyword that when used inside
    // a `constructor` method will call the `constructor`
    // of the extended class (super class, parent class).
    super(name, age);
    this.specialAbility = specialAbility;
  }

  fight(doggo) {
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)];
    return `${winner} won!`;
  }
}

const bobBuilder = new Doggo("Bob Builder", 11);
const sonicSam = new DoggoFighter("Sonic Sam", 8, "Screech!");
