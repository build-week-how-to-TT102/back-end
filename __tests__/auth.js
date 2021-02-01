const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig")

afterAll(async () => {
  await db.destroy()
})

beforeEach(async () => {
  await db.seed.run();
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

  it("sends error message on missing password data for register new user", async () => {
    const res = await supertest(server).post("/api/auth/register").send({ username: "test" })

    expect(res.statusCode).toBe(401)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("username and password are required")
  })

  it("sends error message on missing username data for register new user", async () => {
    const res = await supertest(server).post("/api/auth/register").send({ password: "test" })

    expect(res.statusCode).toBe(401)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("username and password are required")
  })

  it("sends error message on non-unique username for register new user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({
        username: "test",
        password: "abc123"
      })
    const res2 = await supertest(server)
      .post("/api/auth/register")
      .send({
        username: "test",
        password: "abc123"
      })

    expect(res2.statusCode).toBe(409)
    expect(res2.type).toBe("application/json")
    expect(res2.body.message).toBe("This username is already taken")
  })

  it("successfully logs in", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({
        username: "test",
        password: "abc123"
      })
    const res2 = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "test",
        password: "abc123"
      })

    expect(res2.statusCode).toBe(200)
    expect(res2.type).toBe("application/json")
    expect(res2.body.message).toBe("welcome, test")
  })

  it("sends error on invalid password", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({
        username: "test",
        password: "abc123"
      })
    const res2 = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "test",
        password: "abc12"
      })

    expect(res2.statusCode).toBe(401)
    expect(res2.type).toBe("application/json")
    expect(res2.body.message).toBe("invalid password")
  })

  it("sends error when username doesn't exist", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({
        username: "missingtest",
        password: "abc123"
      })

    expect(res.statusCode).toBe(401)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("invalid username or password");
  })
})