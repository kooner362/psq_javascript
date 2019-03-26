const settings = require("./settings"); // settings.json

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database,
      port: settings.port,
      ssl: settings.ssl
    }
  });

  knex.select('*').from('famous_people')
  .where('first_name', '=', 'Paul')
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
    knex.destroy();
  });
