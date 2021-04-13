import React from 'react';

import Select from './Select';
import Checkbox from './Checkbox';
import Input from './Input';

export default function Element({ element: { label, placeholder, type, value, options }, id, onChangeValue, name }) {
    switch (type) {
        case 'string':
            return (
                <Input
                    id={id}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onChangeValue={onChangeValue}
                />);
        case 'select':
            return (
                <Select
                    id={id}
                    name={name}
                    label={label}
                    onChangeValue={onChangeValue}
                    value={value}
                    options={options}
                />
            )
        case 'boolean':
            return (<Checkbox
                id={id}
                name={name}
                label={label}
                onChangeValue={onChangeValue}
                value={value}
            />)
        default:
            return null;
    }
}