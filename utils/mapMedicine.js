
function mapMedicine(medicineArr){
    return medicineArr.map(({title}) => 
        `('${nameChecker(title)}', ${randomWithThreeDecimals()},${randomWithTwoDecimals()}, ${randomInteger()})`
    ).join(',');
}

function nameChecker(title){
    if (title.includes("'")) { 
        return title.replace(/'/g, '"'); 
    }
    return title;
}

function randomWithThreeDecimals() {
    return (Math.random() * 100).toFixed(3);
}

function randomWithTwoDecimals() {
    return (Math.random() * 100).toFixed(2);
}

function randomInteger() {
    return Math.floor(Math.random() * 101);
}


module.exports.mapMedicine = mapMedicine;