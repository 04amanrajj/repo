let bag = ''
let bag2 = ''
for (let a = 1; a <= 4; a++) {
  bag = ''
  bag2 = ''

  for (let i = 1; i <= a; i++) {
    bag2 += i + ' '
    bag += '*' + ' '
  }
  console.log(bag2)
  console.log(bag)

}