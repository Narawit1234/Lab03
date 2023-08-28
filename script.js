let A=0;
function Add(){
    console.log(A);
    A=A+1
    if(A>10)
    A=0;
}
const buttonAdd = document.querySelector('#Add');
buttonAdd.addEventListener('click', Add);

let B=0;
function Minus(){
    console.log(B)
    B=B-1
    if(B<0)
    B=10;
}
const buttonMinus = document.querySelector('#Minus');
buttonMinus.addEventListener('click', Minus);

