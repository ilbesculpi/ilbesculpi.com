
function SkillItem(props) {
    return (
        <div className="mt-2">
            { props.name }
            <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: props.value + '%', 'ariaValuenow': props.value, 'ariaValuemin': 0, 'ariaValuemax': 100 }}>{props.value}%</div>
            </div>
        </div>
    );
}

export default SkillItem;
