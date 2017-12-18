
describe('applying sentenceCase to a text fragment', function() {
  var sentenceCase = require('../helpers/sentenceCase')


  it('Should uppercase the first letter of a sentence', function() {
    expect(sentenceCase("this is a sentence.")).toBe("This is a sentence.")
  })

  it('Should lowercase all but the first letter of a sentence', function() {
    expect(sentenceCase("THIS IS A SENTENCE.")).toBe("This is a sentence.")
  })

  it('Should uppercase the first letter of multiple sentences', function() {
    expect(sentenceCase("sentence one. sentence two.")).toBe("Sentence one. Sentence two.")
  })

  it('Should lowercase all but the first letter of multiple sentences', function() {
    expect(sentenceCase("SENTENCE ONE. SENTENCE TWO.")).toBe("Sentence one. Sentence two.")
  })

  it('Should ignore periods without following seperators', function() {
    expect(sentenceCase("the number 3.25 and the version 3.1.5")).toBe("The number 3.25 and the version 3.1.5")
  })

  it('Should replace the seperators [space] _ [underscore] & - [hyphen]', function() {
    expect(sentenceCase("the seperators [space]_underscore_and-hyphen")).toBe("The seperators [space] underscore and hyphen")
  })

})
