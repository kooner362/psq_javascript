// Update with your config settings.
const settings = require("./settings"); // settings.json

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: settings.hostname,
      database: settings.database,
      user:     settings.user,
      password: settings.password,
      port: settings.port,
      ssl: settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: settings.hostname,
      database: settings.database,
      user:     settings.user,
      password: settings.password,
      port: settings.port,
      ssl: settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: settings.hostname,
      database: settings.database,
      user:     settings.user,
      password: settings.password,
      port: settings.port,
      ssl: settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
