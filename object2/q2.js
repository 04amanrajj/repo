let arr = [1, 2, 3, 3, 7, 2, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
let obj = {}

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1
  } else {
    obj[arr[i]]++
  }
}

console.log(obj)