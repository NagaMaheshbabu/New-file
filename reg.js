const name =prompt('Enter your name-->');
var todo=prompt('Enter todo');
let array =['fish'];
console.log(array.length);
while(todo !== 'quit' && todo !== 'q')
{

    todo=prompt('Enter todo');
if(todo === 'list')
{
   
     if(array.length == 0)
     {
         console.log('Array is empty enter some elements');
         break;
     }

     for(var list of array)
     {
         console.log('******');
         console.log(list);
         console.log("*****");
         break;
     }

 
}


else if(todo === 'new' || todo === 'add')
{
    const newTodo = prompt('Enter new element in array');
    array.push(newTodo);
    break;
}

else if(todo ==='delete')
{
   var index =prompt('Enter index to delete');
console.log(`you deleted   ${array.splice(index,1)} from the list`);
break;

}
console.log(`${name} quit from the game!`);

}

