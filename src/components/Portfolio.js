import './Portfolio.css';
import About from './About';
import Info from './Info';
import Skills from './Skills';
import Experience from './Experience';
import Showcase from './Showcase';

function Portfolio(props) {

    return (
        <div className="container-fluid p-0">
            <About name={ props.profile.name } bio={ props.profile.bio } avatar={ props.profile.avatar } />
            <Info info={ props.profile.personal } />
            <Skills />
            <Experience />
            <Showcase />
        </div>
    );
}

export default Portfolio;
