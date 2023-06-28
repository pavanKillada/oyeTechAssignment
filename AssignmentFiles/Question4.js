//There are so many methods to create a new object which include all the properties from both the objects.
//Simply, I used two methods to create a new object
//1. By using a constructor function.
//2. By using the spread operator.

const person = {
  id: 2,
  gender: "male",
};

const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};

function MergedObject(...objects) {
  //Flexibility to add more than 1 obj properties into a new object
  const newObj = {};
  objects.map((obj) => {
    for (let keys of Object.keys(obj)) {
      newObj[keys] = obj[keys];
    }
  });
  return newObj;
}

const newObjectByFunction = new MergedObject(person, student); //Constructor fun

const newObjectBySpread = {
  //using the spread operator to create new object.
  ...person,
  ...student,
};

console.log(newObjectByFunction);
console.log(newObjectBySpread); //Both result in the same output.
