const grid = document.getElementById('grid');
const resetBtn = document.querySelector('.button-52');
let inputRange = document.querySelector('input');
let gridValue = document.querySelector('.grid-value');
let size = 16;

createDiv();

function createDiv(divAmount) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i<size*size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'rgb(35,35,35)';
        })
        grid.append(div);
    }
};

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createDiv();
}

inputRange.addEventListener('input', function(e) {
    size = e.target.value;
    gridValue.textContent = `${size}x${size}`;
    reset();
});

resetBtn.addEventListener('click', reset);