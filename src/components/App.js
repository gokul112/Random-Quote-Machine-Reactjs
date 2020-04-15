import React from 'react';
import Header from './Header';
import '../App.css';
import Generate from './Generate';
import PrintQuote from './PrintQuote';
import usetoState from './usetoState';

function App() {
  const {updateQuotes,save,errorMessage} = usetoState([])  //Seperated state Logic

  return (
    <div className="App" >
      <Header title="Random Quote Generator"/>
      <Generate save={save}/>
      {!errorMessage?
      (<PrintQuote quotes={updateQuotes}/>):""}
    </div>
  );
}

export default App;
