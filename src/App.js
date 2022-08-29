import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import gattino from './assets/gattino.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prima app React</h1>
        <ButtonComponent btnText="QUESTO BOTTONE È UN COMPONENT (come function)"/>
        <ImageComponent srcUrl={gattino} altTxt="immagine di un gattino"/>
      </header>
        
    </div>
  );
}

export default App;
