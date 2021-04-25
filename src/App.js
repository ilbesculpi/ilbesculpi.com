import './App.css';
import Porfolio from './components/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
    return (
        <Porfolio />
    );
}

export default App;
