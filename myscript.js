const container= document.getElementById('container');

let mouseDown= false;
let eraseMode=false;

document.body.addEventListener("mousedown", ()=> mouseDown=true)
document.body.addEventListener("mouseup", ()=> mouseDown=false)

function createGrid(n){
    const frag= document.createDocumentFragment();
    for(let i=0; i< (n*n); i++){
        const sq= document.createElement('div');
        sq.className= 'square';
        
        sq.style.flex=`0 0 calc(100%/${n})`;

        sq.addEventListener('mousedown', () => {
            sq.style.backgroundColor = eraseMode? "white" : "black";
        });

        sq.addEventListener('mouseenter', ()=>{
            if(mouseDown==true){
                sq.style.backgroundColor = eraseMode? "white" : "black";
            }
        })


        frag.appendChild(sq)
    }
    container.appendChild(frag);

}

const btn= document.getElementById('btn-size');
btn.addEventListener('click', ()=>{
    let input= prompt("Enter grid size ")
    let gridsize=parseInt(input);
    if(isNaN(gridsize)|| gridsize<1 || gridsize>100){
        prompt('Please enter a value between 1 and 100')
    }
    else{
        container.innerHTML = ""
        createGrid(gridsize)
    }
})

const reset= document.getElementById('reset');
reset.addEventListener('click', ()=>{
    const squares= container.querySelectorAll('.square');
    squares.forEach(sq=>{
        sq.style.backgroundColor="";
    })
})

const erase= document.getElementById('erase');
erase.textContent = "Erase Mode: OFF";
erase.addEventListener('click', ()=>{
    eraseMode= !eraseMode
    erase.textContent = eraseMode 
        ? "Erase Mode: ON" 
        : "Erase Mode: OFF";
})

createGrid(16);

