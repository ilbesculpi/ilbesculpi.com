import './Info.css';

function Info(props) {
    return (<section id="information">
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
              <dd>Ilbert Esculpi</dd>
              <dt>Email</dt>
              <dd>ilbert.esculpi@gmail.com</dd>
              <dt>Phone</dt>
              <dd>+58 412.2982011</dd>
              <dt>Address</dt>
              <dd>Caracas, Venezuela</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default Info;