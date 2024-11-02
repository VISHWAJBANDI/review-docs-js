1. 
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
// o/p="You are eligible to vote." because our condition is satisfied

2. 
var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's a cool day.");
}
// o/p="It's a cool day." because our condition is not satisfied


3. 

var number = 7;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


4. 
var score = 60;
if (score >= 50) {
  console.log("You passed the test!");
} else {
  console.log("You did not pass the test.");
}
// o/p="You passed the test!" because our condition is satisfied


5. 
var num = -10;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
// o/p="The number is negative." because our condition is not satisfied

6. 
var totalAmount = 120;
var discount = totalAmount > 100 ? 10 : 0;
console.log("Discount applied:", discount);
// o/p=Discount applied: 10 because our condition is satisfied 120>100 so our condition is true.

7. 

var value = 20;
if (value % 5 === 0) {
  console.log("The value is a multiple of 5.");
} else {
  console.log("The value is not a multiple of 5.");
}
// o/p="The value is a multiple of 5." because 20 can multiple by 5 so the remainder will be 0 so 0 === 0 dataypes and values are same 


8. 
var driverAge = 17;
if (driverAge >= 18) {
  console.log("Eligible to drive.");
} else {
  console.log("Not eligible to drive.");
}
// o/p:-"Not eligible to drive." because our condition is not statisfied 17 not >= 18.

9.
var age = 45;
if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
// o/p:-"adult" coz 45 < 60 so our condition satisfied with a adult.

10. 

var stock = 5;
var purchaseQuantity = 3;
if (purchaseQuantity <= stock) {
  console.log("Order placed successfully.");
} else {
  console.log("Not enough stock available.");
}
// o/p:- "Order placed successfully." coz 3 <= 5 satisfied



11. 

var price = 200;
var taxRate = 0.08;
var totalCost = price + (price * taxRate);
console.log("Total Cost:", totalCost);

// o/p:- Total Cost:216 bacause 200+(200 * 0.08 = 16)=200+16=216;

12. 
var marks = 78;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
// o/p:-"Grade: B" because 78 satisfed at grade b 78 >=75;


13. 
var personAge = 21;
var status = personAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status);
// o/p:- "status:Adult" bacause 21 >= 18 so satisfied.

14. 
var hasID = true;
var hasTicket = false;
if (hasID && hasTicket) {
  console.log("Entry allowed.");
} else {
  console.log("Entry not allowed.");
}
// o/p:-"Entry not allowed" because && operator follows striky both true vaules only so true && false are differient so not satisfied.
15. 
var weight = 70; // in kg
var height = 1.75; // in meters
var bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));

// o/p:-

16. 

var billAmount = 250;
var serviceCharge = billAmount >= 200 ? billAmount * 0.1 : billAmount * 0.05;
console.log("Service Charge:", serviceCharge);

// o/p:-"Service Charge:25" condition is satisfied 

17. 

var passwordLength = 5;
if (passwordLength < 8 || passwordLength > 15) {
  console.log("Password length is not acceptable.");
} else {
  console.log("Password length is acceptable.");
}
// o/p:-"Password length is not acceptable." in this case nor operator only follows atleast one vaule will be so 5 <= 8 is true so condition is statisfied 

18. 

var basePrice = 150;
var discount = basePrice > 100 ? 20 : 10;
var finalPrice = basePrice - discount;
console.log("Final Price:", finalPrice);
// o/p: "Final price:130" because 150 > 100 is condition is statisfied it will print true vaule of 20 but next line is baseprice-discount so 150-30=130. 

19. 

var year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
// o/p:"leap year" because The first condition is true (2024 % 4 === 0).
// The second condition evaluates:
// 2024 % 100 !== 0 is true (because 2024 is not divisible by 100).
// 2024 % 400 === 0 is false (because 2024 is not divisible by 400).
// Since the second condition uses ||, it returns true because at least one part is true
// so (true && true )
20.  

var age = 20;
if (age >= 18) {
  if (age >= 21) {
    console.log("Eligible for driving and drinking.");
  } else {
    console.log("Eligible for driving only.");
  }
} else {
  console.log("Not eligible for driving or drinking.");
}
// o/p:"Eligible for driving only" First Condition: if (age >= 18)
// first condition,
// This checks if the person is at least 18 years old.
// Since age is 20, this condition is true.
// Second Condition: if (age >= 21)

// This is nested inside the first condition and checks if the person is at least 21 years old.
// Since age is 20, this condition is false. then i will print else block.


// doc-2

// 1. Simple Array of Fruits

var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 
// o/p:"apple" coz the index of apple is 0

// 2. Add an Element to an Array

var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); 
// o/p: ["Red", "Green", "Blue" "yellow"] coz we are adding as method like it will push element at end of the array


// 3. Iterate Through an Array

var animals = ["Dog", "Cat", "Elephant"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// o/p:"dog",
        // "cat"
        // "elephant" coz the index start at "0" so total length of array is 3 so last element of elephant index is "2"

// 4. Access Object Properties
var person = { name: "John", age: 30, city: "New York" };
console.log(person.name); 
// o/p: John coz we are assigning only the name property. 

// 5. Add a New Property to an Object

var car = { make: "Toyota", model: "Camry" };
car.year = 2022;
console.log(car);

// o/p:{ make: "Toyota", model: "Camry", year: 2022}; bcoz we are add one more element to object that is year it also be printed.

// 6. Array Length Check
var numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
  console.log("Array has more than 3 elements.");
}
// o/p:"array has more than 3 elements" coz 5 > 3

// 7. Check if an Array Contains an Element

// var colors = ["Red", "black", "Blue"];
// for( var Green of colors) {
//   console.log("Green is in the array.");
// }else{
// console.log("no values prsnt in array")
// }
// // o/p:

// 8. Combine Two Arrays

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr2.concat(arr1);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// 9. Check if an Object Has a Property
var student = { name: "Alice", age: 22 };
if ("age" in student) {
  console.log("Age is a property of student.");
}
// o/p:

// 10. Simple Array Sorting
var scores = [1, 10, 40, 30];
scores.sort();
console.log(scores); 

// o/p:[1,10,30,40]


// Slightly Tricky Snippets

// 11. Nested Array Access
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log([1][1])
// Output: 5
// 12. Nested Object Access

var user = {
  name: "Mark",
  address: {
    city: "Los Angeles",
    zip: 90001
  }
};
console.log(user.address.city)
// Output: Los Angeles

// 13. Loop Through an Object's Properties

var book = { title: "1984", author: "George Orwell", year: 1949 };
for (var key in book) {
  console.log(key + ": " + book[key]);
}

// 14. Filtering an Array

var numbers = [5, 10, 15, 20];
var filtered = numbers.filter(function(number) {
  return number > 10;
});
console.log(filtered); // Output: [15, 20]

// 15. Removing the Last Element of an Array

var fruits = ["Apple", "Banana", "Cherry"];
var lastFruit = fruits.pop();
console.log(fruits); 
console.log(lastFruit);
// o/p:["Apple","Banana"]
// o/p:cherry
// 16. Convert Object Values to Array

var car = { make: "Toyota", model: "Camry", year: 2022 };
var carValues = Object.values(car);
console.log(carValues); 

// o/p:["Toyota","Camry","2022"]

// 17. Convert Array to String

var letters = ["A", "B", "C"];
var string = letters.join("-");
console.log(string);
// o/p:A-B-C


