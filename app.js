const sketchContainer = document.querySelector('.sketchContainer');

for (let i=0; i<256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel-element');
    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = 'black';
    })
    sketchContainer.append(pixel);
}

