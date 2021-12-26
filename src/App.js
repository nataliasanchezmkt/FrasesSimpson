import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario'
import Frase from './components/Frase';


function App() {
  return (
    <section className='container'>
      <article>

      <Formulario/>
      </article>
      <article>
        <Frase/>
      </article>
    </section>
  );
}

export default App;
