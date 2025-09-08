const container= document.getElementById('container');
const frag= document.createDocumentFragment();
for(let i=0; i< 256; i++){
    const sq= document.createElement('div');
    sq.className= 'square';
    frag.appendChild(sq)
}
container.appendChild(frag);
const squares= document.querySelectorAll('.square');
squares.forEach(square=>{
    square.addEventListener('mouseenter', ()=>{
        square.style.backgroundColor= "black";
    })
})
