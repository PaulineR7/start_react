import './App.css';

const h1 = "Hello la piscine !";
const paragraph = "Salut je m'apelle Pauline, je suis en formation à la piscine";


function App() {
  return (
    <div className="App">
      <h1> {h1} </h1>
      <p> {paragraph} </p>
    </div>
  );
}

export default App;
