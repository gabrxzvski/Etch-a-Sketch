const mainDiv = document.querySelector('.mainDiv');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');


const buttons = document.querySelector('.buttons');
const allBtns = buttons.querySelectorAll('a');
allBtns.forEach(element => {
    element.addEventListener('click', () => {
        if (element.id === 'btn1') {
            const rainbowGrid = document.querySelectorAll('.grid-item');
            rainbowGrid.forEach(element => {
                element.addEventListener('mouseover', (element) => {
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    element.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                });
            });
        } if (element.id === 'btn2') {
            const blackGrid = document.querySelectorAll('.grid-item');
            blackGrid.forEach(element => {
                element.addEventListener('mouseover', (element) => {
                    element.target.style.backgroundColor = 'black';
                });
            });
        } if (element.id === 'btn3') {
            const gridItem = document.getElementsByClassName('grid-item');
            for (let i = 0; i < gridItem.length; i++) {
                gridItem[i].style.backgroundColor='white';
            }
        }
    });
});

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
    grid(16, 16);
}


function test() {
    let x = document.getElementById('gridSize').value;
    clearGrid(x, x);
    grid(x, x);
}

function grid(rows, cols) {
    mainDiv.style.setProperty('--grid-rows', rows);
    mainDiv.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        mainDiv.appendChild(cell).className = 'grid-item';
    }
}


function clearGrid() {
    const gridArray = Array.from(mainDiv.childNodes);
    gridArray.forEach((element) => {
        mainDiv.removeChild(element);
    });
}
