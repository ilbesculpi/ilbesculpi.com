import './About.css';

function About(props) {

    return(<section id="about" className="about">
    <div className="row text-center">
      <div className="col-12 col-md-6 offset-md-3">
        <h1>About</h1>
        <h2>Let me introduce myself.</h2>
        <div className="card">
          <div className="card-body">
            <div className="row text-left">
              <div className="col-12 col-sm-4">
                <img src="img/youravatar.png" className="d-block img-avatar rounded mx-auto" alt="avatar" />
              </div>
              <div className="col-12 col-sm-8">
                <p>Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  </section>);

}

export default About;
