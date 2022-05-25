import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {Navbar} from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'



function App() {

  const cliente = {
    nombre: 'Juan Jose',
    rubro: 'Materiales Electricos'
  }

  return (
    <div>
        <Navbar/>

        <ItemListContainer nombre={cliente.nombre}/>
        
    </div>
  );
}

export default App;