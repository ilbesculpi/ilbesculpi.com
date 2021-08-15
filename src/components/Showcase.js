import ShowcaseItem from './ShowcaseItem';
import './Showcase.css';

function Showcase(props) {

    const items = [
        {
            title: 'Agricolum',
            tags: '',
            image: '/img/projects/agricolum01.jpeg'
        },
        {
            title: 'AutoTrade',
            tags: '',
            image: '/img/projects/autotrade01.jpeg'
        }
    ];

    const showcaseItems = items.map((item, index) => {
        return (
            <div key={ 'showcase-item-' + index } className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <ShowcaseItem title={ item.title } image={ item.image } />
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