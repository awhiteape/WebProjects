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
    const price = parseInt(document.getElementById('price'));
    const earnings = parseInt(document.getElementById('earnings'));
    const res = document.getElementById("pe-result");
    //calculate p/e and display result
    if (earnings === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    let total = price/res;
    res.textContent = "P/E = " + total;
    console.log("pe calculated");
})

stockButton.addEventListener('click', (event) => {
    event.preventDefault();
    //add to local storage.
    console.log("Stock added!");
})
