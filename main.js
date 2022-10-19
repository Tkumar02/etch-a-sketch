const container = document.querySelector('.container')
const choose = document.querySelector('.choose')
const choice = document.getElementById('choice')
const create = document.querySelector('.create')
const start = document.querySelector('.start')
const random = document.querySelector('.random')
const clear = document.querySelector('.clear')
let number = choice.value;
let boxes;

// user to create size of grid
function createDiv(x){
    if (choice.value>=1){
        for (let i = 0; i < x*x; i++) {
            let word = ("box"+ (i+1));
            word = document.createElement('div');
            word.classList = 'box';
            container.append(word);
            container.style.gridTemplateColumns = `repeat(${x},1fr)`;
            container.style.gridTemplateRows = `repeat(${x},1fr)`;
        }
    }
}

create.addEventListener('click',function() {createDiv(choice.value)})


//random colour generator
function randomColour(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box=>{
        box.addEventListener('mouseover',function(){
            let r = Math.floor(Math.random()*256)
            let g= Math.floor(Math.random()*256)
            let b = Math.floor(Math.random()*256)
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    })
}


//function to permanently colour in the boxes
function newBoxes(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box=>{
        box.addEventListener('mouseover',function(){
            // box.classList.add('change')
            box.style.backgroundColor = 'lightgrey';
        })
    })
}

//button functions to restart app, to restart grid and stop new grids being built on each other
// create.addEventListener('click',clearBoxes)
create.addEventListener('click',function(){
    create.disabled = true;
})

//button to colour in boxes in  random colour
random.addEventListener('click',randomColour)

//button to colour boxes in one colour
start.addEventListener('click',newBoxes)

clear.addEventListener('click',function(){
    location.reload()
}) 



