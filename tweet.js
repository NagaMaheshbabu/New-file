
let form = document.querySelector('form');
let container = document.querySelector('#tweets');
form.addEventListener('submit',function(e)
{e.preventDefault();
   
let userInput = form.elements.username;
let tweetInput = form.elements.tweet;
addTweet(userInput.value,tweetInput.value);
userInput.value='';
tweetInput.value='';

})

const addTweet=(username,tweet)=>
{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    container.append(newTweet);

}
container.addEventListener('click',function(e)
{
e.target.remove();
})

