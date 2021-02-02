const db = require('../../data/dbConfig')

function find() {
  return db('howtos')
}

function findById(id) {
  return db("howtos").where({id}).first()
}

module.exports = {
  find,
  findById,
}