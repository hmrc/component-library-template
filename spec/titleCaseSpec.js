
describe('applying titleCase to a fragment', function() {
var titleCase = require('../helpers/titleCase')
  it('Should upper case the first letter of each word', function() {
    expect(titleCase('one two three')).toBe('One Two Three')
  })

  it('Should lower case all but the first letter of each word', function() {
    expect(titleCase('ONE TWO THREE')).toBe('One Two Three')
  })

  it('Should break words on [space] _ [underscore] & - [hyphen]', function() {
    expect(titleCase('one two_three-four')).toBe('One Two Three Four')
  })
})

