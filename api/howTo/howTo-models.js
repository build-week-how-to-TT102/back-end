const db = require('../../data/dbConfig')

function find(id) {
  return db('howtos as h')
    .join("users as u", "h.userId", "u.id")
    .where({ userId: id })
    .select("h.title", "h.description", "h.id as howtoID")
}

function findById(id) {
  return db("howtos").where({id}).select("id", "title", "description").first()
}

async function add(howto) {
  const [id] = await db("howtos").insert(howto)
  return findById(id)
}

async function update(id, changes) {
  await db("howtos").where({id}).update(changes)
  return findById(id)
}

module.exports = {
  find,
  findById,
  add,
  update,
}