const container = document.querySelector('.container')
const choose = document.querySelector('.choose')
const choice = document.getElementById('choice')
const create = document.querySelector('.create')
const start = document.querySelector('.start')
const clear = document.querySelector('.clear')
let number = choice.value;
let boxes;

function createDiv(x){
    if (choice.value>=600){
        for (let i = 0; i < x; i++) {
            let word = ("box"+ (i+1));
            word = document.createElement('div');
            word.classList = 'box';
            container.append(word);
        }
    }
}

create.addEventListener('click',function() {createDiv(choice.value)})

function newBoxes(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box=>{
        box.addEventListener('mouseover',function(){
            box.classList.add('change')
        })
    })
}

function clearBoxes(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box=>{
        box.classList.remove('change')
     })
}

create.addEventListener('click',clearBoxes)
create.addEventListener('click',function(){
    create.disabled = true;
})
start.addEventListener('click',newBoxes)
start.addEventListener('click',function(){
    start.disabled = true;
})
clear.addEventListener('click',function(){
    location.reload()
}) 



