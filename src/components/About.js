import './About.css';

function About(props) {

  const lines = props.bio.split('\n');
  const textForBio = lines.map(line => <p>{ line.trim() }</p>);

  return(<section id="about">
    <div className="row text-center">
      <div className="col-lg-8 col-xl-6 mx-auto">
        <h1>About</h1>
        <h2>Let me introduce myself.</h2>
        <div className="card w-100">
          <div className="card-body">
            <div className="row text-left">
              <div className="col-12 col-sm-4">
                <img src={ props.avatar } className="d-block img-avatar rounded mx-auto" alt="avatar" />
              </div>
              <div className="col-sm-8 mx-auto p-3">
                { textForBio }
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
