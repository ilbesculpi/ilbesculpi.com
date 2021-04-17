import './Info.css';

function Info(props) {
    return (
      <section id="information">
        <div className="row">
          <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-6">
              <h2>Profile</h2>
              <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
            </div>
            <div className="col-6">
              <h2>Basic Information</h2>
              <dl>
                <dt>Full name</dt>
                <dd>{ props.info.name }</dd>
                <dt>Email</dt>
                <dd>{ props.info.email }</dd>
                <dt>Phone</dt>
                <dd>{ props.info.telephone }</dd>
                <dt>Location</dt>
                <dd>{ props.info.location }</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;