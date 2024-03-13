import { inputDataProps } from '../interfaces/interfaces';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
import { FormEvent } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

const registerDataInputs: inputDataProps = {
    name: '',
    email: '',
    password1: '',
    password2: '',
}

export const RegisterFormikPage = () => {

   const onSubmit = ( values: any ) => {
        console.log( values );
    }

    return (
        <div>
            <h1>Register Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (vaelues) => onSubmit(vaelues) }
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'Debe tener mas de 3 caracteres')
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('Debe de ser un email valido')
                                    .required('Requerido'),
                        password1: Yup.string()
                                    .min(6, 'Debe tener mas de 6 caracteres')
                                    .required('Requerido'),
                        password2: Yup.string()
                                    .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                                    .required('Requerido'),

                                    
                    })
                }
            >
                {
                    ( { handleReset } ) => (
                        <Form>
                        <MyTextInput label="Nombre" name="name" placeholder="Nombre" />
                        <MyTextInput label="Correo" name="email" type="email" placeholder="example@example.com"/>
                        <MyTextInput label="Contraseña" name="password1" type="password" placeholder="******"/>
                        <MyTextInput label="Repetir Contraseña" name="password2" type="password" placeholder="******"/>
    
                        <button type="submit">
                            Create
                        </button>
    
                        <button type="button" onClick={ handleReset }>
                            Reset
                        </button>
                    </Form>
                    )
                }
            </Formik>
        </div>
    )
}
