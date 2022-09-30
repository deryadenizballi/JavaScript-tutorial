

const deneme=document.querySelector('.deneme');
console.log(deneme);
let text="Derya Deniz Balli";

let index=0;
function writeText(){
    deneme.innerHTML=text.slice(0,index);

    
    index++;

    if(index >text.length){
        index=0;
    }
}

setInterval(writeText,100);