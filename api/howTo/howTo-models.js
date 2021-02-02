const db = require('../../data/dbConfig')

function find() {
  return db('howtos')
}

function findById(id) {
  return db("howtos").where({id}).first()
}

async function add(howto) {
  const [id] = await db("howtos").insert(howto)
  return findById(id)
}

module.exports = {
  find,
  findById,
  add,
}