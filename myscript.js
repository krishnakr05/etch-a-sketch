const container= document.getElementById('container');
/*
const frag= document.createDocumentFragment();
for(let i=0; i< 256; i++){
    const sq= document.createElement('div');
    sq.className= 'square';
    
    sq.style.flex=`0 0 calc(100%/16)`;

    sq.addEventListener('mouseenter', () => {
        sq.style.backgroundColor = "black";
    });


    frag.appendChild(sq)
}
container.appendChild(frag);
*/

function createGrid(n){
    const frag= document.createDocumentFragment();
    for(let i=0; i< (n*n); i++){
        const sq= document.createElement('div');
        sq.className= 'square';
        
        sq.style.flex=`0 0 calc(100%/${n})`;

        sq.addEventListener('mouseenter', () => {
            sq.style.backgroundColor = "black";
        });


        frag.appendChild(sq)
    }
    container.appendChild(frag);

}

const btn= document.getElementById('btn');
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

createGrid(16);

