import './Portfolio.css';
import About from './About';
import Info from './Info';
import Skills from './Skills';
import Experience from './Experience';
import Showcase from './Showcase';

function Portfolio(props) {
    return (<div className="container-fluid p-0">
        <About />
        <Info />
        <Skills />
        <Experience />
        <Showcase />
    </div>);
}

export default Portfolio;
