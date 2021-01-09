import './Section.css';

function Section(props) {
  return (
    <section className={props.background}>
      {props.children}
    </section>
  );
}

export default Section;
