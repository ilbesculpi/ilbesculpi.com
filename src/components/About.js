import './About.css';

function About(props) {

  return(<section id="about">
    <div className="row text-center">
      <div className="col-lg-6 mx-auto">
        <h1>About</h1>
        <h2>Let me introduce myself.</h2>
        <div className="card w-100">
          <div className="card-body">
            <div className="row text-left">
              <div className="col-12 col-sm-4">
                <img src="img/youravatar.png" className="d-block img-avatar rounded mx-auto" alt="avatar" />
              </div>
              <div className="col-sm-8 mx-auto p-3">
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
