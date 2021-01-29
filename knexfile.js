const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

module.exports = {

  production: {
    ...sharedConfig,
    connection: {
      filename: './data/prod.db3'
    },
  },

  development: {
    ...sharedConfig,
    connection: {
      filename: './data/dev.db3'
    },
  },

  testing: {
    ...sharedConfig,
    connection: {
      filename: './data/test.db3'
    }
  },

};
