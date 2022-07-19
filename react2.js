
function Page()
{
  return(
      <>
    <Header />
  
    </>
  )
}

function Header()
{
    return(
   
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
     
    )
}



ReactDOM.render(<Page />,document.getElementById('root'));