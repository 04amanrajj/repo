let str = ["aman", "ajay", "naman", "pulkit", "nrupul"]
let count = 0
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if (str[i][j] == 'a') {
      count++
      
    }
  }
} console.log(count);
