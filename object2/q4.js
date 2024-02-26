// print names only with rating above 4.2
let apple_product = [
  { name: 'macbook', rating: 4.6, price: 180000 },
  { name: 'iphone', rating: 4, price: 80000 },
  { name: 'ipad', rating: 4.2, price: 55000 },
  { name: 'airpods', rating: 4.3, price: 20000 }]


for (let i = 0; i < apple_product.length; i++) {
  if (apple_product[i].rating > 4.2) {
    console.log(apple_product[i].name)
  }
}
