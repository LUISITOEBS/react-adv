import { Formik, Form  } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstraction = () => {    
    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    jobType: '',
                    lastName: '',
                    terms: false,
                }}
                onSubmit={( values ) => {
                    console.log( values );
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                    lastName: Yup.string()
                                .max(10, 'Debe de tener 10 caracteres o menos')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('Debe de ser un email valido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                              .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'La opción no es válida')
                                .required('Requerido')
                })}
            >
                {   (formik) => (
                        <Form>
                            <MyTextInput label="firstName" name="firstName" />
                            <MyTextInput label="lastName" name="lastName" />
                            <MyTextInput label="email" name="email" type="email"/>
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Sr</option>
                                <option value="it-jr">IT Jr</option>
                            </MySelect>
                            <MyCheckbox label="Terms and conditions" name="terms" />
        
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
