const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

let name  = process.argv[2];


function getResults (name, callback)  {
    client.connect((err) => {
        if (err) {
            return console.error("Connection Error", err);
        }
        console.log('Searching ...');
        client.query("SELECT * from famous_people where first_name=$1::text", [name], (err, result) => {
            if (err) {
            return console.error("error running query", err);
            }
            client.end();
            return callback(null, result.rows);
        });
    });
}

function showResults(results){
    console.log(`Found ${results.length} person(s) by the name ${name}:`);
    let count = 0 ;
    results.forEach(function(person) {
        count++;
        console.log(`-${count}: ${person.first_name} ${person.last_name}, born '${person.birthdate}'`);
    });
}

getResults(name, function(err, results){
    showResults(results);
});
