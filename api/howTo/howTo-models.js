const db = require('../../data/dbConfig')

function find() {
  return db('howtos')
}

module.exports = {
  find,
}