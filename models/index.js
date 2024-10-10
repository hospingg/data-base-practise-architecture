const {Client} = require('pg');
const Pharmacy = require('./Pharmacy')
const User = require('./User')
const Medicine = require('./Medicine')

const config ={
    user: 'postgres',
    password: '9669',
    host: 'localhost',
    port: 5432,
    database: 'pharmacy_db'
}
const client = new Client(config);
    
Pharmacy._client = client;
Pharmacy._tableName = 'pharmacies';

User._client = client;
User._tableName = 'users';

Medicine._client = client;
Medicine._tableName = 'medicines';

module.exports = {
    Pharmacy,
    User,
    Medicine,
    client
}