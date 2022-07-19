let buttons = document.querySelectorAll('button');

for(let button of buttons)
{
    button.addEventListener('click',colorize)
}


function colors()
{
    let r = Math.floor(Math.random()*255);
    let g =  Math.floor(Math.random()*255);
    let b =  Math.floor(Math.random()*255);
    let a =`${Math.floor(Math.random()*1)}${'.'}${Math.floor(Math.random()*10)}`;
    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
   return color;
}

function colorize()
{
   
    this.style.backgroundColor = colors();
    this.style.borderRadius = border();
}

function border()
{
    return(`${Math.floor(Math.random()*10)}px`);
}


let input = document.querySelector('input');
input.addEventListener('keydown',function(e)
{
switch(e.code)
{
    case 'ArrowUp':
        console.log('up!');
        break;
    case 'ArrowDown' :
        console.log('Down!');
        break;
    case 'ArrowLeft':
        console.log('Left');
        break;
      case 'ArrowRight':
          console.log('Right');
          break;
          default:
              console.log('Ignore');

}
})
//Form Code..
let txt = document.querySelector('#txt');
let ul = document.querySelector('ul');
document.querySelector('form').addEventListener('submit',function(e)
    {
        e.preventDefault();
       let catName =txt.value;
      const newLi= document.createElement('li');
      newLi.innerHTML = catName;
      ul.append(newLi);
      txt.value ='';
    })