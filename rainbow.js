let colors = ['red','blue','green','yellow','purple','gray','black'];


let select = document.querySelectorAll('span');

select.forEach((one,ind)=>
{
    one.style.color = colors[ind];
});


const hi=document.querySelector('h1').innerText;
const rem = hi.split(' ').join('');
const split = rem.split('');


function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math. random() * maxVal;
    randomNumber = Math. floor(randomNumber);
    randomNumber = randomNumber. toString(16);
    let randColor = randomNumber. padStart(6, 0);
    return `#${randColor. toUpperCase()}`
    }

    const a=generateRandomColor();
    console.log(a);

