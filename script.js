/*

var firstName = "Priya";
var age = 25;
console.log("Name is " + firstName, "Age  is :" + age);

//type corection

var job = "Worker";
var salary = 24000;

alert(firstName + " is a " + job+" " + "salary is :" + salary);
*/
/*
var Mark, John;
var Markheight = prompt("Enter Markheight :");
var Markmass = prompt("Enter mark mass :");
Mark = Markmass / (Markheight * Markheight);
console.log(Mark)

var johnHeight = prompt("Enter johHeight :");
var Johnmass = prompt("Enter johnmass :");
John = Johnmass / (johnHeight * johnHeight);
console.log(John)



var BMI = Mark > John;
console.log("Is  Marks's BMI higher than John? " + BMI);
*/

/*
var firstName ="John";
var age =19;

if(age<13)
{
    console.log(firstName+" is teenager");
}
else if(age >=13 && age <20)
{
console.log(firstName+" is adult");
}
else if(age>=20 && age < 30)
{
    console.log(firstName+" is Younger");
}
else{
    alert(firstName+" is a man");
}
/* ternary Operator */
/*
let drink;
drink = age >=18 ? 'beer' : 'water';
console.log(drink);
*/
/*
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  console.log(getFee(true));
  console.log(getFee(null));
  console.log(getFee(false));

  let age = 5;
function f(age)
{
let name = 'john';

  return age < 13 ? name+' is teenager'
  : age >= 13 && age <20 ? 'adult'
  : age >=20 && age < 30 ? 'Younger'
  : age >=30 && age < 50 ?'Man'
  : 'old man'
}
console.log(f(age));


let g = ['gani',false,29,'teacher'];

let dev = (g.indexOf('developer')=== -1) ? g[0]+' IS A DEVELOPER'
: 'NOT A DEVELOPER'
console.log(dev)
*/
/*

 function tipCal(bill)
{

  if(bill < 50)
  {
return (.2*bill);
  }
  else if(bill >= 50 && bill <200)
  {
    return (.15*bill);
  }
  else if(bill >=200)
  {
    return(.10*bill);
  }


}
var bill =[124,48,268]
var bills = [tipCal(bill[0]),tipCal(bill[1]),tipCal(bill[2])];


var total = [bill[0]+bills[0],bill[1]+bills[1],bill[2]+bills[2]];
console.log(bills,total);

*/


