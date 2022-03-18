let grid = document.getElementById('grid');
const resetBtn = document.getElementById('resetBtn');
let inputRange = document.querySelector('input');
let gridValue = document.querySelector('.grid-value');
let applyChange = document.querySelector('.apply');
let allUnits = document.getElementById('grid').childNodes;
let size = 16;

createDiv();

function createDiv(divAmount) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i<size*size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    grid.append(div);
    }
};

inputRange.addEventListener('input', function(e) {
    size = e.target.value;
    gridValue.textContent = `${size}x${size}`;
});

applyChange.addEventListener('click', () => {
    reset();
});

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createDiv();
}

resetBtn.addEventListener('click', reset);