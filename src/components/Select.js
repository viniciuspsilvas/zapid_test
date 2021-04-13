export default function Select({ id, label, onChangeValue, value, name, options }) {
    return (
        <div key={`${id}_Select`}>
            <label >{label}</label>
            <select value={value} onChange={event => onChangeValue(name, event)} >
                <option>Default select</option>

                {options.length > 0 && options.map((option, i) => <option key={option.value} value={option.value}>{option.label} </option>)}
            </select>
        </div>
    )
}