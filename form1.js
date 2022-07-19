let form = document.querySelector("#form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const ul = document.querySelector('#ul');
const textInput= form.elements.txt.value;
const tweetInput = form.elements.tweet.value;

const li=document.createElement('li');
const bTag =document.createElement('b');
bTag.append(textInput);
li.append(bTag);
li.append(`-${tweetInput}`);
ul.append(li);
  
})