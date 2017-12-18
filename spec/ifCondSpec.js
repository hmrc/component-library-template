var Handlebars = require('handlebars')
var ifCond = require('../helpers/ifCond')
ifCond.register(Handlebars)

describe('ifCond', function(){

  it('Should return the expected content when both elements match', function() {
    var template = Handlebars.compile('{{#ifCond true true}}true{{/ifCond}}')
    var result = template()
    expect(result).toBe('true')
  })

  it('Should return no content when elements dont match and no {{else}} value is set', function() {
    var template = Handlebars.compile('{{#ifCond true false}}true{{/ifCond}}')
    var result = template()
    expect(result).toBe('')
  })

  it('Should return the {{else}} content when elements dont match and an {{else}} value is set', function() {
    var template = Handlebars.compile('{{#ifCond true false}}true{{else}}false{{/ifCond}}')
    var result = template()
    expect(result).toBe('false')
  })

})
