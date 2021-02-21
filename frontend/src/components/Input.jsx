import React from 'react'
import { Form } from 'semantic-ui-react'


const Input = (props) => {
    return (
        <Form.Field>
            <label>{props.label}</label>
            <input 
                placeholder={props.placeholder} 
                type={props.type} 
                value= {props.value}
            />
        </Form.Field>
    )
}

export default Input 