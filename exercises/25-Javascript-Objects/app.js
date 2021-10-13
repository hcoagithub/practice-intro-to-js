var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
 
  personNum.forEach(function (numUno){
   
    sumaUno += numUno;
 })
 
 
 personNumDos.forEach(function (numDos){
    
     sumaDos += numDos;
  })
 
 
  personNumTres.forEach(function (numTres){
    
     sumaTres += numTres;
  })

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  var sumOfAllLuckyNumbers = sumaUno + sumaDos + sumaTres;


  return sumOfAllLuckyNumbers;
}



//Enter all your code here:

person.lucky_numbers[3] = 33;

let newPerson= {};

newPerson.name = "Jimmy";
newPerson.lastname= "Doe";
newPerson.age= 13;
newPerson.genero= "male";
newPerson.lucky_numbers= [1,2,3,4];
newPerson.significant_other= null;

family.members[2] = newPerson;

let personNum = person.lucky_numbers;
let personNumDos = person2.lucky_numbers;
let personNumTres = newPerson.lucky_numbers;
let sumaUno= 0;
let sumaDos= 0;
let sumaTres= 0;



 








//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));