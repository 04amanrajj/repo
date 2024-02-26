let obj = {
  name: 'aman',
  age: 19
};
let obj2 = {
  location: 'nathdwara'
}
let a = { ...obj, ...obj2 }
console.log(a)