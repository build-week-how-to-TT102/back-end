const supertest = require('supertest')
const server = require("../api/server")

describe("Server integration tests", () => {
  it("tests the welcome message for the server", async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to the Server")
  })
})