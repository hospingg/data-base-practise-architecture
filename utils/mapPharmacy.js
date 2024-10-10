// const result = await client.query("INSERT INTO authors(first_name, last_name, birthdate) VALUES ('Jane', 'Williams', '12-12-1995') ")

function mapPharmacy(pharmacyArr){
    const str =  pharmacyArr.map(({name:{last}, location:{street, city, state, country}}) => 
        `('${last}','${street.name} ${street.number}, ${city}, ${state}, ${country}')`
    ).join(',');
    return str
}

module.exports.mapPharmacy = mapPharmacy;

