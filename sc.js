//traversing the DOM

var a= document.querySelector("#items");
console.log(a.parentNode);
a.parentNode.style.color="red"
console.log(a.parentNode.parentNode);
console.log(a.parentNode.parentNode.parentNode);


//parentElement
console.log(a.parentElement);
console.log(a.parentElement.parentElement.parentElement)

//childNode

console.log(a.childNodes);

//children
console.log(a.children);
console.log(a.children[2]);
a.children[2].style.color ="yellow";
a.children[2].style.backgroundColor ="grey"

//firstChild
console.log(a.firstChild);
a.firstChild.textContent ="Bye"
//lastChild
console.log(a.lastElementChild);
a.lastElementChild.textContent="red";

//nextSibling
console.log(a.nextSibling);

//nextElementSibiling
console.log(a.nextElementSibling);

//previousSibling
console.log(a.previousSibling);

//pereviousElementSibling
console.log(a.previousElementSibling);
a.previousElementSibling.style.color ="yellow"

//create element

var element = document.createElement('h2');
console.log(element)

//adding class
element.className ="Bye";

//adding id
element.id ="hello";

//adding attr
element.setAttribute('title','set'); 
//adding textNode
var b=document.createTextNode("Hi Friends");

//add text to b
element.appendChild(b);
console.log(b)

var contain =document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(element);
contain.insertBefore(element,h1);

var item = document.querySelector('li #items')
var h = document.querySelector('li h');
console.log(element);
element.style.fontFamily = 'monoscope';
item.insertBefore(element,h)

