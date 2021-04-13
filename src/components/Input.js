export default function Input({ id, label, placeholder, value, onChangeValue, name }) {
    return (
        <div key={`${id}_Input`}>
            <label >{label}</label>
            <input placeholder={placeholder || ' '} value={value} onChange={event => onChangeValue(name, event)} />
        </div>
    )
}