
function SkillItem(props) {
    return (<div>
        { props.name }
        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: props.value + '%', 'aria-valuenow': props.value, 'aria-valuemin': 0, 'aria-valuemax': 100 }}>{props.value}%</div>
        </div>
    </div>);
}

export default SkillItem;
