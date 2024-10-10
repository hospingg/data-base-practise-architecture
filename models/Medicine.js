const {mapMedicine} = require('../utils/mapMedicine')


class Medicine{
    static _client;
    static _tableName;


    static async findMedicines(){
        return this._client.query(`SELEST * FROM ${this._tableName};`)
    }
    static async bulkCreate(medicine){
        const mapped = mapMedicine(medicine);
        const quertText = `INSERT INTO ${this._tableName}(active_ingredient, dosage, price, stock_quantity) VALUES ${mapped};`
        const prom = await this._client.query(quertText)
        return prom;
    }
}


  

module.exports = Medicine;