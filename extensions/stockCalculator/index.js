const roa = document.getElementById('roa-form');
const roaButton = document.getElementById('roa-submit');

roaButton.addEventListener('click', (event) => {
    event.preventDefault();
    const roaResult = document.getElementById('roa-result');
    roaResult.textContent = 'Result: Clicked';
})
