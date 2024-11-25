const pg = require('pg');

const DATABASE ={
user:'postgres',
host:'127.0.0.1',
database:'web22',
password: '0000',
port: 5432,
}

const client =new pg.Pool(DATABASE)

module.exports=client;