import './App.css';
import Banner from './componets/Banner';
import Contato from './componets/Contato';
import MeusProjetos from './componets/MeusProjetos';
import Rodape from './componets/Rodape';
import SobreMim from './componets/SobreMim';

function App() {
  return (
    <div className="App">
      <Banner/>
      <SobreMim />
      <MeusProjetos/>
      <Contato/>
      <Rodape/>
    </div>
  );
}

export default App;
