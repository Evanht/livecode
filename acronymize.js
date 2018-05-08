
const phrase = "Always be coding"

// TODO
// split the phrase at spaces
// iterate over the array at index 0
// concatenate the results into new string
// upcase the end
// return it

const acronymizer = (string) => {
  let acronym = ""
  const array = string.split(" ")
  array.forEach((word) => {
    acronym += word[0].toUpperCase()
  })
  return acronym
}


const betterAcronymizer = (string) => {
  return string.split(" ").map(word => word[0].toUpperCase()).join("")
}

// Test our functions
console.log(acronymizer(phrase))
console.log(betterAcronymizer(phrase))
