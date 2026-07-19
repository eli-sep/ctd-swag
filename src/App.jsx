import ctdLogo from './assets/mono-blue-logo.svg';
import './App.css';

const message = 'Coming Soon...'; //This is outside the function definition for App

function App() {
  const title = ' CTD Swag'; // This is inside the Component before the return
  return (
    <div className="coming-soon">
      <h1>{title}</h1> {/* `title` inserted into heading */}
      <div style={{ height: 100, width: 100 }}>
        <img src={ctdLogo} alt="Code The Dream Logo" />
      </div>
      <h2>{message}</h2> {/* `message` inserted into heading */}
    </div>
  );
}

export default App;