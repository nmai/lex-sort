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

  // @todo: convert this to factorial of largest point
  let max = 0
  points.map((x) => {
    max += x
  })

  function compute (str) {
    let weight = 0
    str.split("").map((chr, i) => {
      weight += (points[chr] + 1) * i //@todo: this is wrong, continue here
    })
    return weight
  }

  // obligatory one-liner
  let weights = input.map((str, i) => { return compute (s) })

  // sigh
  // fastest is to calculate the position based off max points
  // but i dunno. fast... not really clean though IMO.
}

module.exports = sort
