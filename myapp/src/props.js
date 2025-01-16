function Greetings(value) {
    return (<p>Hello {value.name}</p>);
  }
  
  export default function MyApp() {
    return (
      <div>
        <Greetings name="Hari"/>
      </div>
    );
  }