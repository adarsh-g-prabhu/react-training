import "./App.css";

function MyButton() {
  return (
    <button onClick={handleClick()}>
      I'm a button
    </button>
  );
}

function handleClick(){
  alert("Clicked");
}

function Hello()
{
  let a=10
  return(
    <>
    <p>{a} is number</p>
    <strong>Hello world</strong>
    </>

  )
}



const srcLogo= './logo192.png';
export default function MyApp() {
  const b=true;
        let content;
        if (b)
        {
      content=<MyButton />
        }
        else
        {
      content=<Hello />
        }
  return (
    <div className="main-div">
      <h1 style={{color:"red"}}>Welcome to my app</h1>
      <img src={srcLogo} alt="react logo"/>
      <br />
      {content}
    </div>
  );
}

