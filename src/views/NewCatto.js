import './NewCatto.css';

function NewCatto(props) {
  return (
    <section>
      <form>
      Aca podras agregar a tu catto!
        <div>
          ¿Cuantos gatos tenes?<br></br>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4 o más">4+</option>
          </select>
        </div>
        <div>
          ¿Como se llama tu gato?<br></br>
          <textarea></textarea>
        </div>
      </form>
    </section>
  );
}

export default NewCatto;
