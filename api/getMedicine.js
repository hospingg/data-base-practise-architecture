const API_BASE = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=60dc3578afae4ca0ab5159f5ade835e9';

module.exports.getMedicines = async() =>{
    const response = await fetch(`${API_BASE}&number=30`)
    const data = await response.json();
    return data.results
}