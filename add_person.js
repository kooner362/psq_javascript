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
    },
    useNullAsDefault: true
  });

const date = new Date();
knex('famous_people').insert([{first_name:'test3', last_name:'test3', birthdate: date}])
.asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
    knex.destroy();
  });

