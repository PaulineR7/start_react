import './App.css';
import Footer from './Footer';
import Header from './Header';
import LatestArticles from './LatestArticles';

const h1 = "Hello la piscine !";
const paragraph = "Salut je m'apelle Pauline, je suis en formation à la piscine";


function App() {
  return (
    <div>
      <Header />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
