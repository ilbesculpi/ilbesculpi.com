import './Skills.css';
import SkillItem from './SkillItem';

function Skills(props) {

  const leftCol = props.left.map((skill, index) => <SkillItem key={ 'skill-left-' + index } name={ skill.name } value={ skill.value } />);
  const rightCol = props.right.map((skill, index) => <SkillItem key={ 'skill-right-' + index } name={ skill.name } value={ skill.value } />);

  return (<section id="skills">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <h2>Professional Skills</h2>
        <p>A few things that I am good at!</p>
        <div className="row">
          <div className="col-6">
            { leftCol }
          </div>
          <div className="col-6">
            { rightCol }
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default Skills;
