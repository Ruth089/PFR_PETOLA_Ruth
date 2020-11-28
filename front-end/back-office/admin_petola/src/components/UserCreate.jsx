import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    
   
} from 'react-admin'

const UserCreate = (props) => {
    return < Create title='create a user' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput multiline source='email'/>
               
            </SimpleForm>
    </ Create>
}
 
export default UserCreate 