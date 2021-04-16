import './Skills.css';
import SkillItem from './SkillItem';

function Skills(props) {
    return (<section id="skills">
    <h2>Professional Skills</h2>
    <div className="row">
      <div className="col-6">
        <SkillItem name="Software Architect" value={80} />
        <SkillItem name="Team Leader" value={80} />
        <SkillItem name="Google Cloud" value={75} />
        <SkillItem name="AWS" value={70} />
      </div>
      <div className="col-6">
        <SkillItem name="PHP" value={85} />
        <SkillItem name="Node" value={80} />
        <SkillItem name="iOS" value={75} />
        <SkillItem name="Android" value={70} />
        <SkillItem name="Angular" value={70} />
      </div>
    </div>
  </section>);
}

export default Skills;
