const db = require('../../data/dbConfig')

function find() {
  return db("users")
}

function findById(id) {
  return db('users').where({id}).select("username", "id").first()
}

function findByUsername(username) {
  return db("users").where("users.username", username).first()
}

async function add(user) {
 const [id] = await db('users').insert(user)
 return findById(id)
}

module.exports = {
  find,
  findById,
  findByUsername,
  add,
}