//import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Cards from './components/cards/Cards';
import CardHolder from './components/cards/CardHolder';
import Login from './components/Login/Login';


function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section>
        <Login></Login>
      </section>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>
    </section>
  );
}

export default App;