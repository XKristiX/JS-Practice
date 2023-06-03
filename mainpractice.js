var myFirstName = 'Kristi'
var myLastName = 'Smith'
const myAge = 38

console.log (myFirstName, myLastName, myAge)
console.log("Hi my name is " + myFirstName + " " + myLastName + " and I am " + myAge + " years old.")

console.log(myAge - 10)

//object
const person = {
    firstName : 'Kristi',
    lastName : 'Smith',
    age : 38
}
console.log(parseInt(person.age))

const evenNumber = [6, 8, 10, 12]
//const meArray ['Kristi' 'Smith']
console.log(evenNumber[2] * 4)


// function createPerson(lastname, firstname, age) {
//     let person = {};
//     person.lastname = lastname;
//     person.firstname = firstname;
//     person.age = age;
//     return person;
//   }
  
//   // Create multiple person objects using the createPerson function
//   let person1 = createPerson("Doe", "John", 30);
//   let person2 = createPerson("Smith", "Jane", 25);
  
//   // Access and modify the values of the person objects
//   console.log(person1.lastname);  // Output: "Doe"
//   console.log(person2.firstname); // Output: "Jane"
  
//   person1.age = 31;
//   console.log(person1.age);       // Output: 31