'use strict'

jest.dontMock('../sort')

describe('lex-sort', function() {
  let sort = require('../sort');
  it('Example 1', function() {
    expect(sort(["acb", "abc", "bca"], "abc")).toEqual(["abc","acb","bca"])
  })
  it('Example 2', function() {
    expect(sort(["acb", "abc", "bca"], "cba")).toEqual(["bca", "acb", "abc"])
  })
  it('Example 3', function() {
    expect(sort(["aaa","aa",""], "a")).toEqual(["", "aa", "aaa"])
  })
})


/*

Using Jest CLI v0.8.1, jasmine1
 PASS  __tests__\sort-test.js (0.016s)
3 tests passed (3 total in 1 test suite, run time 0.485s)

*/