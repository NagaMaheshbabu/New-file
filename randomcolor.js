let btn = document.querySelector('button')
btn.addEventListener('click',()=>
{
    let colors = call();
    document.querySelector('h1').innerHTML = `rgba${colors}`;
    document.body.style.backgroundColor = `rgba${colors}`;

   
});

function call()

{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let a =`${ Math.floor(Math.random()*1)}${'.'}${Math.floor(Math.random()*10)}`;
    if(r+g+b <100)
    {
       document.querySelector('h1').style.color = 'white';
      
        
    }
    else
    {
        document.querySelector('h1').style.color = 'black';
    }
    return colors = `(${r}, ${g}, ${b}, ${a})`;
  
}