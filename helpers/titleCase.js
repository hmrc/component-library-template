module.exports = function titleCase (text) {
  return text
    .split(/[ -_]/)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join(' ')
}
