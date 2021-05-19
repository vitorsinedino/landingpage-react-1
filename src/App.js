import './App.css';
import Navigation from './components/navbar';
import Welcome from './sections/welcome-section';
import ContentFirst from './sections/content-1';
import ContentSecond from './sections/content-2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome-container">
          <Navigation></Navigation>
          <Welcome></Welcome>
        </div>
        <ContentFirst></ContentFirst>
        <ContentSecond></ContentSecond>
      </header>
    </div>
  );
}

export default App;
