import './App.css';
import Navigation from './components/navbar';
import Welcome from './sections/welcome-section';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome-container">
          <Navigation></Navigation>
          <Welcome></Welcome>
        </div>
        
      </header>
    </div>
  );
}

export default App;
