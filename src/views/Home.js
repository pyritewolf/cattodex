import Section from '../components/Section';
import './Home.css';

function Home() {
  return (
    <>
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
      <Section>
        <form>
          <h1>Boop us!</h1>  
          <h2>And tell us, how do you met us? <br/>* boop * *boop*</h2> 
          <div>
            <input type="checkbox" id="instagram"/> 
            <label for="instagram">Instagram</label>
            <br/>
            <input type="checkbox" id="facebook"/> 
            <label for="facebook">Facebook</label>
            <br/>
            <input type="checkbox" id="twitter"/> 
            <label for="twitter">twitter</label>
          </div>
        </form>
      </Section>
    </>
  );
}
export default Home;
