const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig")

afterAll(async () => {
  await db.destroy()
})

describe("Authentication integration tests", () => {
  it("successfully registers new user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({
        username: "test",
        password: "abc123"
      })

      // console.log(res)

      expect(res.statusCode).toBe(201)
      expect(res.type).toBe("application/json")
      expect(res.body.username).toBe("test")
  })
})