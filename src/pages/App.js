import Card from '../components/Card';
import './App.css';

function App() {
  return (
    <div className="container">
      <section id="items-group">
        <div className="row">
          <Card name="Sabão em pó" unity="2" price="5.49"/>
          <Card name="Detergente" unity="2" price="2.99"/>
          <Card name="Feijão" unity="7" price="5.50"/>
          <Card name="Cuzcuz" unity="2" price="1.20"/>
          <Card name="Papel higiênico" unity="1" price="14.99"/>
        </div>
      </section>
    </div>
  );
}

export default App;
