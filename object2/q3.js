//print the elements that are present only 1 time
let arr = [2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8]
let obj = {}
let sum = 0
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1
  } else {
    obj[arr[i]]++
  }
}

for (let key in obj) {
  if (obj[key] < 2) {
    console.log(key)
  }
}