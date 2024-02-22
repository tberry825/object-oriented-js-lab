// Exercises for learning about Object Oriented JavaScript: Part 2


// Question 1: Review the following Constructor Function: 
function Greeter(name) {
    this.name = name;
}
Greeter.prototype.identify = function() {
    return "I am " + this.name;
};
Greeter.prototype.speak = function() {
    alert("Hello, " + this.identify() + ".");
};

// Create an instance of the Greeter function. Note: this should take in the argument of a person's name.

// Call the speak method and have the function correctly alert the user.



//Question 2: 
// Create a constuctor function for a Video Object. The function should take in arguments of title (a string), an uploader (a string, the person who uploaded it) and seconds (a number, the duration), and it should save them as propeties of the Object

// Create a method on the Video Object called watch(). When that method is called, it should use console.log to output a string like: "You watched all 60 seconds of Otters Holding Hands!"

// Instantiate a new Video object and call the watch()) method on it
// Instantiate another Video object with different constructor arguments.

// Bonus: Use an array of data and a for loop to instantiate 5 video objects. 




//Question 3: Animal User Model

//Step 1: Create a variable, name it animal, and assign it an object literal.

//Step 2: With Dot Notation, add a property called username and assign it a value. Ensure that your username property exists in animal by inspecting it in the console.

//Step 3: With Bracket Notation, add a property called tagline and give it a value. Check that your property exists in the animal object by inspecting it in the console.

//Step 4: Create a variable called noises and assign it an empty array[]. Add the noises array to your object. Inspect your handiwork! Your object should look something like this:
// {
//     username: 'DaffyDuck',
//     tagline: 'Yippeee!',
//     noises: []
// }

//Step 5: Loop through the properties of your animal object. Count everytime it loops to keep track of the number of properties on your object. Write an if/else statement in your loop: If the key is username, console.log('Hi my name is ' + ___) //fill in with object's username value. If the key is tagline, console.log('I like to say ' + ___) //fill in with object's tagline value.

//Step 6: Write a constructor function, AnimalCreator that creates a new animal object.The constructor function has 4 parameters: username, species, tagline, and noises. Noises should be an array. Each object should also have a friends key. Friends should always be an empty array to start. (They haven't added any friends yet!)

//Step 7: Create your first animal!

//Step 8: Make another animal!! Yay! So fun!

//Step 9: Write a function, addFriend that takes an animal object(like the one returned from the AnimalCreator function) and adds another animal object as it's friend. Your animal should now look like this.

// { username: 'Cloud',
//  species: 'sheep',
//  tagline: 'You can count on me!',
//  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//  friends: [{username: 'Moo Girl', species: 'cow', tagline: "Yaaaaas Moooo", noises: ["moooo", "sup", "hay girl"]}]
// }

//Step 10: Change your addFriend function to only add the username of the friend, not the whole object.

// { username: 'Cloud',
//  species: 'sheep',
//  tagline: 'You can count on me!',
//  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//  friends: ['Moo Girl']
// }

//Step 11: Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!

//Step 12: Create a function, addMatchesArray, that takes a farm(array of animal objects) and adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.

// { username: 'Cloud',
//  species: 'sheep',
//  tagline: 'You can count on me!',
//  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//  friends: ['Moo', 'Zeny'],
//  matches: []
// }

//Step 13: Create a function, giveMatches, that takes a farm collection(aka an array of animal objects) that already has a matches property.It selects a name from the friends array and adds it to the matches array.You can choose how the selection is made(random, the first element, etc).Make sure all your animal objects have friends.

// { username: 'Cloud',
//  species: 'sheep',
//  tagline: 'You can count on me!',
//  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//  friends: ['Moo Girl', 'Zeny'],
//  matches: ['Zeny']
// }







//Question 4: Review the following code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Creating an instance of the Person class

// Call the sayHello method on your new object.






//Question 5: Review the following code
class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into ${this.accountHolder}'s account. New balance: ${this.balance}`);
        } else {
            console.log('Invalid deposit amount. Please enter a positive number.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.accountHolder}'s account. New balance: ${this.balance}`);
        } else {
            console.log('Invalid withdrawal amount or insufficient funds.');
        }
    }

    checkBalance() {
        console.log(`${this.accountHolder}'s account balance: ${this.balance}`);
    }
}

// Creating instances of BankAccount


// Performing each of the transactions on your new object.




