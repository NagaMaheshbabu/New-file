let max = parseInt(prompt('Enter maximum number'));
while(!max)
{
    max=parseInt(prompt('Enter valid number'));
}


const target =Math.floor(Math.random() *max)+1;
console.log(target);

let guess = parseInt(prompt('Enter Your first guess'));
let attempt =1;


while(guess !== target)
{
    attempt++;
    if(parseInt( guess) >target)
    {
guess =  prompt('too high ! Guess again');

    }else
    {
        guess=prompt('Too low! Guess again');
     }

 
}
console.log(`you got at ${attempt} attempt`);
console.log('YoU GOT IT')

