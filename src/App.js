import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div>
      <header><h1>Cattodex</h1></header>
      <main>
        <Section background="light-grey">
          <div id="containerFirstSection">
            <i class="catIcon las la-cat" ></i> 
            <p>A home for all<br/>you feline friends</p>
          </div>
        </Section>
        <Section>
          <div class="secsec">
            <div>
              <i class="Shareico las la-share-alt-square"></i>
              <h2><a href="https://www.google.com" >Share</a></h2>
              <p>Connect with your<br/>friends & share<br/>your cattos</p>
            </div>
            <div>
              <i class="Juegoico las la-paw"></i>
              <h2><a href="https://google.com" >Play</a></h2>
              <p>Brave new challenges<br/>for your pets<br/>every week</p>
            </div>
          </div>
        </Section>
      </main>
      <footer>Made with <i class="lab la-gratipay"></i> by <a  href="https://github.com/Kekeberto" target="_blank">zeke</a> & <a href="https://github.com/fornielesv"  taget="_blank">iso</a></footer>
    </div>
  );
}

export default App;
