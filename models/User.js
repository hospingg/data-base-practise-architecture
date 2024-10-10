const {mapUsers} = require('../utils/mapUsers')


class User{
    static _client;
    static _tableName;


    static async findUsers(){
        return this._client.query(`SELEST * FROM ${this._tableName};`)
    }
    static async bulkCreate(authors){
        const mapped = mapUsers(authors);
        const prom = await this._client.query(`INSERT INTO ${this._tableName}(name, email, password) VALUES ${mapped};`)
        return prom;
    }
}

module.exports = User;