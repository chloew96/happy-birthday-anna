import './App.css';
import Card from './images/card.png';

function App() {
  return (
    <div className="App">
      <div className='date'>
        0416/2021
      </div>
      <div className="app-container">
        ✨🎊 Happy birthday Anna 🎉✨
        <img src={Card} className="card"/>
      </div>
      
    </div>
  );
}

export default App;
