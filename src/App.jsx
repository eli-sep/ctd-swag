import ctdLogo from './assets/mono-blue-logo.svg';
import './App.css';

let message = 'Coming Soon...';

setTimeout(() => {
  message = 'We can feel it...';
  console.log(`Updated message: ${message}`);
}, 3000);

function App() {
  return (
    <div className="coming-soon">
      <h1>CTD Swag</h1>
      <div style={{ height: 100, width: 100 }}>
        <img src={ctdLogo} alt="Code The Dream Logo" />
      </div>
      <h2>{message}</h2>
    </div>
  );
}

export default App;