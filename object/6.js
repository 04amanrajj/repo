function mapSymbols(N) {
  let names = {
    '!': 1,
    '@': 2,
    '#': 3,
    '$': 4,
    '%': 5,
    '^': 6,
    '&': 7,
    '*': 8,



  };

  for (let i in names) {
    console.log(i + "-" + (N - 1 + names[i]))
    N++
  }
}
