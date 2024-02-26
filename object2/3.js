let details = {
  name: "aman",
  phone_number: "9876543210",
  address: {
    city: "nathdwara",
    pincode: 313213,
    country: "india",
    hobbies: [
      "cricket",
      "football",
      "volleyball"]
  }
}
// console.log(details.address.hobbies[1])
for (let i = 0; i < details.address.hobbies.length; i++) {
  console.log(details.address.hobbies[i])
}