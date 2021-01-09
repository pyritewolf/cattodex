import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div>
      <header><h1>Cattodex</h1></header>
      <main>
        <Section background="grey">
          Primer seccion
        </Section>
        <Section>
          Segunda seccion
        </Section>
      </main>
      <footer>Made with 🤍 by <a  href="https://github.com/Kekeberto" target="_blank">zeke</a> & <a href="https://github.com/fornielesv"  taget="_blank">iso</a></footer>
    </div>
  );
}

export default App;
