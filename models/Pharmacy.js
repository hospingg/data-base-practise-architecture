const {mapPharmacy} = require('../utils/mapPharmacy')


class Pharmacy{
    static _client;
    static _tableName;


    static async findPharmacy(){
        return this._client.query(`SELEST * FROM ${this._tableName};`)
    }
    static async bulkCreate(pharmacies){
        const mapped = mapPharmacy(pharmacies);
        const prom = await this._client.query(`INSERT INTO ${this._tableName}(name, adress) VALUES ${mapped};`)
        return prom;
    }
}

module.exports = Pharmacy;