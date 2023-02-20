import "./App.scss";
import { Game } from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Tic Tac Toe</p>
      </header>
      <div className="App-body">
        <Game />
      </div>
    </div>
  );
}

export default App;
