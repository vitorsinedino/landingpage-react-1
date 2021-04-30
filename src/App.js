import './App.css';
import Navigation from './components/navbar';
import Welcome from './sections/welcome-section';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome></Welcome>
      </header>
    </div>
  );
}

export default App;
