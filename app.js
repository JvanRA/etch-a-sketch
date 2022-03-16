const grid = document.getElementById('grid');
const resetBtn = document.getElementById('resetBtn');
let allUnits = document.getElementById('grid').childNodes;

for (let i=0; i<256; i++) {
    const div = document.createElement('div');
    div.classList.add('unit');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
    grid.append(div);
}

function reset() {
    for(let i=0; i < allUnits.length; i++) {
        allUnits[i].style.backgroundColor = 'white';
    }
}

resetBtn.addEventListener('click', reset);