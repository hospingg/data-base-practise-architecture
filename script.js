
const {getPharmacy} = require('./api/getPharmacy');
const {getUsers} = require('./api/getUsers');
const {getMedicines} = require('./api/getMedicine');
const {Pharmacy, User, Medicine, client} = require('./models')

async function start() {

    await client.connect();

    // const usersArr = await getUsers()
    // const usersResult = await User.bulkCreate(usersArr);

    const pharmacyArr = await getPharmacy()
    const result = await Pharmacy.bulkCreate(pharmacyArr);

    // const medicineArr = await getMedicines()
    // const result = await Medicine.bulkCreate(medicineArr);

    // const result = await MedicineToUser.bulkCreate();

    await client.end();
}

start();

