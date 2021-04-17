import logo from './logo.svg';
import './App.css';
import Porfolio from './components/Portfolio';

const profile = {
  name: 'Ilbert Esculpi',
  bio: `👋 Hi there\n
      I'm Ilbert and i'm full stack / mobile developer with more than 10 years experience.
      I am an enthusiastic and very motivated person. I have always been hard working and goal's focused with proven results.`,
  avatar: 'img/youravatar.png',
  personal: {
    name: 'Ilbert Esculpi',
    email: 'ilbert.esculpi@gmail.com',
    telephone: '+58 412.2982011',
    location: 'Caracas, Venezuela'
  }
};

function App() {
  return (
    <Porfolio profile={ profile } />
  );
}

export default App;
