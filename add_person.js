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

let first_name = process.argv[2];
let last_name = process.argv[3];
let date = new Date(process.argv[4]);


knex('famous_people').insert([{first_name: first_name, last_name: last_name, birthdate: date}])
.asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
    knex.destroy();
  });

