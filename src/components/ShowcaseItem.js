function ShowcaseItem(props) {

    return (<div className="card border-0 d-block overflow-hidden rounded">
        <div className="card-body p-0">
            <figure>
                <img src={ props.image } className="img-fluid" alt="work pic" />
            </figure>
        <div className="overlay-work bg-dark"></div>
        </div>
    </div>);
}

ShowcaseItem.defaultProps = {
    image: './img/portfolio1.jpeg'
}

export default ShowcaseItem;
