const roa = document.getElementById('roa-form');
const roaButton = document.getElementById('roa-submit');
const peForm = document.getElementById('pe-form');
const peButton = document.getElementById('pe-submit');
const stockForm = document.getElementById('stock-form');
const stockButton = document.getElementById('save-stock');

roaButton.addEventListener('click', (event) => {
    event.preventDefault();
    const roaResult = document.getElementById('roa-result');
    roaResult.textContent = 'Result: Clicked';
})

peButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("pe calculated");
})

stockButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Stock added!");
})
