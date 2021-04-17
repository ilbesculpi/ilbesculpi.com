import ShowcaseItem from './ShowcaseItem';
import './Showcase.css';

function Showcase(props) {

    const items = Array(6).fill({});
    const showcaseItems = items.map(item => {
        return (
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <ShowcaseItem item={item} />
            </div>
        );
    });

    return (
        <section id="portfolio">
            <div className="row text-center">
                <div className="col-lg-8 mx-auto">
                    <h2>Showcase</h2>
                </div>
            </div>
            <div className="row">
                { showcaseItems }
            </div>
        </section>
    );
}

export default Showcase;