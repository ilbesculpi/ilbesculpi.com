import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Experience(props) {

    const entries = props.experience.map((item, index) => {
        return (<li key={index} className="timeline-item bg-white ml-3 p-4 shadow">
            <div className="timeline-arrow"></div>
            <h1>{ item.company }</h1>
            <h2 className="mb-0">{ item.position }</h2>
            <span className="small text-gray">
                <FontAwesomeIcon icon={['fas', 'clock']} />
                { item.date.start } - { item.date.end }
            </span>
            <div className="text-muted"><small>{ item.tags }</small></div>
            <p className="text-small mt-2 font-weight-light">{ item.description }</p>
        </li>)
    })

    return (
        <section id="experience">
            <div className="row text-center">
            <div className="col-lg-8 mx-auto">
                <h2>Work Experience</h2>
            </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-8 mx-auto">
                    <ul className="timeline">
                        { entries }
                    </ul>
                </div>
            </div>
        </section>
    );

}

export default Experience;
