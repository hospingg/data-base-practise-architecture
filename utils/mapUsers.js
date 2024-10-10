
function mapUsers(userArr){
    return userArr.map(({name:{first, last}, email, login:{password}}) => 
        `('${first} ${last}', '${email}', '${password}')`
    ).join(',');
}

module.exports.mapUsers = mapUsers;