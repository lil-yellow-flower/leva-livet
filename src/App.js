import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/ocean-beach2.jpg'} alt="ocean beach"
          style={{ resize: "contain", width: "100%", height: "20%" }}></img>
      </header>
    </div>
  );
}

export default App;
