export default function Checkbox({ id, label = ``, onChangeValue, value, name }) {
    return (
        <div key={`${id}_Checkbox`}>
            <label >{label}</label>
            <input type="checkbox" checked={value} onChange={event => onChangeValue(name, event)} />
        </div>
    )
}