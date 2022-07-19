//https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');


let url = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/';




let btn = document.querySelector('button');
btn.addEventListener('click',()=>
{
    for(let i =1;i<=151;i++)
{
    let div = document.createElement('div');
    div.classList.add('pokemon');
    let span = document.createElement('span');
    span.innerHTML = `#${i}`;
    let img = document.createElement('img');
    img.src = `${url}${i}.png`;
    div.appendChild(img);
    div.appendChild(span);
    container.append(div);
}
})






