const grid = document.getElementById('grid');
const resetBtn = document.getElementById('resetBtn');
let inputRange = document.querySelector('input');
let gridValue = document.querySelector('.grid-value');
const rainbowBtn = document.querySelector('.rainbowBtn');
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

function rainbowMode(divAmount) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i<size*size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${randNum255()},${randNum255()},${randNum255()})`;
        })
        grid.append(div);
    }
};

function randNum255() {
    let randNum = Math.floor(Math.random()*256);
    return randNum;
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

rainbowBtn.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    rainbowMode();
});

resetBtn.addEventListener('click', reset);