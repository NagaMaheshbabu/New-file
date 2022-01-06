console.dir(document);
console.log(document.URL)
console.log(document.domain);
console.log(document.characterSet);

console.log(document.firstChild);
document.title="demo";
console.log(document.title)
console.log(document.head);
console.log(document.body);
var a=document.getElementById("hello");
console.log(a);
a.textContent = "hello";
a.innerHTML = "GoodBye";