import React, { useState, useEffect } from 'react';
import Element from './components/Element';
import './App.css';

function App() {

  // Json files schemas e.g: sign up, mailing list registration, feedback form
  const schema = require('./schemas/signupSchema.json');

  const [elements, setElements] = useState(null);
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    setElements(schema)
  }, [schema])

  function onFormSubmit(event) {
    setInvalidFields([])

    // Check the fields are valid 
    const invalidFields = Object.values(elements.required).filter(elementRequired => {
      let aux = Object.entries(elements.properties).find(([name, field]) => (elementRequired === name && field.value == null))

      return aux ? aux[0] : false
    })

    if (invalidFields && invalidFields.length > 0) {
      setInvalidFields(invalidFields)

    } else {

      // Show the resulting form data
      alert(JSON.stringify(elements));
    }
  }

  function onFormChange(name, event) {
    const newElements = { ...elements }

    if (newElements.properties) {
      Object.entries(elements.properties).forEach(([_name, field]) => {
        const { type } = field

        if (name === _name) {
          switch (type) {
            case 'checkbox':
              field['value'] = event.target.checked;
              break;
            default:
              field['value'] = event.target.value;
              break;
          }
        }
        setElements(newElements)
      });
    }
  }

  return (
    <div className="App">
      <form >
        {elements ? Object.entries(elements.properties).map(([name, field], i) => <Element name={name} element={field} id={i} key={`${i}_element`} onChangeValue={onFormChange} > </Element>) : null}

        <button type="button" onClick={onFormSubmit} >Submit</button>

        {invalidFields &&
          invalidFields.map((f, i) => <p key={i} >The field '{f}' is invalid. </p>)
        }
      </form>
    </div>
  );
}

export default App;
