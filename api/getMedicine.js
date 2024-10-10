const API_BASE = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=API_KEY';

module.exports.getMedicines = async() =>{
    const response = await fetch(`${API_BASE}&number=30`)
    const data = await response.json();
    return data.results
}
