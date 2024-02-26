let obj = {

  name: "John",
  age: 30,
  location: "New York",
  isMarried: true
}

obj["location"] = "Goa";
obj["isMarried"] = false;
// deleting an obj
delete obj["age"];

// loop for obj
for (let i in obj) {
  console.log(i, ":", obj[i])
}