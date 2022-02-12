document.getElementById('positive-btn').addEventListener('click', function () {
    /* const previousCountText = document.getElementById('count');
    const previousCount = parseInt(previousCountText.innerText);
    const newCountText = previousCount + 1;
    previousCountText.innerText = newCountText; */
    calculation(true);


})
document.getElementById('negative-btn').addEventListener('click', function () {
    /* const previousCountText = document.getElementById('count');
    const previousCount = parseInt(previousCountText.innerText);
    const newCountText = previousCount - 1;
    previousCountText.innerText = newCountText; */
    calculation(false);
})
function calculation(incDec) {
    const previousCountText = document.getElementById('count');
    const previousCount = parseInt(previousCountText.innerText);
    if (incDec == true) {
        newCountText = previousCount + 1;
    }
    else {
        newCountText = previousCount - 1;
    }
    previousCountText.innerText = newCountText;
}