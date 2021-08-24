import './App.css';
import Game from './components/Game.js'
import {GameContextProvider} from './GameContext'


function App() {
  return (
    <GameContextProvider>
    <div className="App">
      <Game />
    </div>
    </GameContextProvider>
  );
}

export default App;
