import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import somethings from './somethings'
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [currentSomething, setCurrentSomething] = useState(somethings[0].something);

  function newCurrent(newSomething) {
    setCurrentSomething(newSomething);
  }

  function randomCurrent() {
    setCurrentSomething(somethings[Math.floor(Math.random() * somethings.length)].something);
  }

  return (
    <Container className="something__container" fluid>
      <header className="pennies__header">
        "Tell me something"
      </header>
      <div className="thoughts__container">
        <h2 className="thoughts__current"><span>{ currentSomething }</span></h2>
        <div>
          <Button onClick={ () => randomCurrent() } variant="outline-primary" size="sm" block style={ { color: '#2ab7ca', marginBottom: '1em', borderColor: '#2ab7ca' } }>
            Random something
          </Button>
          <div className="thoughts__list">
            { somethings.map((S, i) => ( <span className={ S.something === currentSomething ? 'thoughts__list--selected' : null } onClick={ () => newCurrent(S.something) } key={ i }>{ S.date }</span>)) }
          </div>
        </div>
      </div>
    </Container>
    );
}

export default App;