const db = require('../../data/dbConfig')

function find(id) {
  return db('howtos as h')
    .join("users as u", "h.userId", "u.id")
    .where({ userId: id })
    .select("h.title", "h.description", "h.id as howtoID")
}

async function findById(id) {
  // return db("howtos").where({id}).select("id", "title", "description").first()
  const howto = await db("howtos").where({id}).select("id", "title", "description").first()
  const steps = await db("steps as s")
    .join("howtos as h", "s.howtoId", "h.id")
    .where({howtoId: id})
    .select("s.id as stepId", "s.step_number", "s.description as step_description")

    return {
      ...howto,
      steps: steps
    }
}

async function add(howto) {
  // const [id] = await db("howtos").insert(howto)
  const [id] = await db("howtos").insert({
    title: howto.title,
    description: howto.description,
    userId: howto.userId
  })

    howto.steps.forEach( async step => {
     await addSteps(step, id)
    })

  return findById(id)
}

async function addSteps(steps, howtoId) {
  await db("steps").insert({
    description: steps.description,
    step_number: steps.step_number,
    howtoId: howtoId
  }) 
}

async function update(id, changes) {
  await db("howtos").where({id}).update(changes)
  return findById(id)
}

function remove(id) {
  return db("howtos").where({id}).del()
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
}