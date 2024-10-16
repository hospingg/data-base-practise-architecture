const API_BASE = 'https://randomuser.me/api/seed="pharmasy"';

module.exports.getPharmacy = async() =>{
    const response = await fetch(`${API_BASE}?results=20`)
    const data = await response.json();
    return data.results
}