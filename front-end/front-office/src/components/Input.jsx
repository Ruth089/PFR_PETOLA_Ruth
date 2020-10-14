import React from 'react'


const Input = (props) => {
    return (
        // <Form.Field>
        //     <label>{props.label}</label>
        //     <input placeholder={props.placeholder} type={props.type} />
        // </Form.Field>
        <div className="form-group">
            <input className="form-control  form-control-lg" placeholder={props.placeholder} type={props.type} label={props.label}/>
        </div>
    )
}

export default Input 

