import logo from './logo.svg';
import './App.css';
import Porfolio from './components/Portfolio';

const profile = {}

function App() {
  return (
    <div className="container">
      <Porfolio profile={profile} />
    </div>
  );
}

export default App;
