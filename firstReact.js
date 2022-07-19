
function Navbar()
{
    return(
       <h1>NavBar</h1>
    )
}

function MainContent()
{
    return (
        <p>This is react </p>
    )
}



ReactDOM.render(
    <div>
        <Navbar/>
        <MainContent/>
        </div>
,document.getElementById('root')
);


let element = document.createElement('h1');
element.textContent = 'This is demo';
element.classList ='header'
document.querySelector('div').appendChild(element);