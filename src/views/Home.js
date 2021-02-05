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
    </>
  );
}

export default Home;
