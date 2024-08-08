const body = document.querySelector("body");
const btn = document.querySelectorAll(".button");


btn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor = 'grey';
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
        if(e.target.id == 'pink'){
            body.style.backgroundColor = 'pink';
        }
    })
}) 