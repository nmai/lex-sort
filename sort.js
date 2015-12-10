/* sort.js: Sorts an array of strings based on arbitrary lex. ordering.
 * note- Please ensure you are running this in an ES6 spec-compliant env.
 *
 * An Exercise in Intellect and Ingenuity™
 */

'use strict'

let sort = function (input, order) {

  // Turn order inside-out (char becomes key, index+1 becomes val).
  // This is what we will use to compute lexical order later.
  let points = []
  order.split('').map((chr, i) => {
    points[chr] = i + 1
  })

  // Returns the calculated weight of strings based off the point
  // values we just generated above
  function compute (str) {
    let weight = 0
    str.split('').map((chr, i) => {
      weight += (points[chr] + 1) / (i + 1)
    })
    return weight
  }

  // Create an array with our input strings mapped to their weight values.
  // This is so we can sort easily.
  let weighted = input.map((str) => {
    return {
      name: str,
      weight: compute(str)
    }
  })

  // Sort the above array based off each item's "weight" key
  weighted.sort((a, b) => {
    if (a.weight > b.weight) {
      return 1
    }
    if (a.weight < b.weight) {
      return -1
    }
    return 0
  })
 
  // Return an array containing only the string values
  return weighted.map((item) => {return item.name})
}

module.exports = sort
