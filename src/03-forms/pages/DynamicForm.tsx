import { Formik, Form } from 'formik';
import formJson  from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value
    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if( rule.type === 'required' ){
            schema = schema.required('Este campo es requerido')
        }

        if( rule.type === 'minLength' ){
            schema = schema.min((rule as any).value || 2, `Minimo de ${ (rule as any).value || 2 } caracteres`)
        }

        if( rule.type === 'email' ){
            schema = schema.email('Debe ser de tipo email')
        }

        requiredFields[input.name] = schema;
    }
}

const validationSchema = Yup.object({ ...requiredFields });



export const DynamicForm = () => {
    return (
        <div>
            <h1>
                DynamicForm
            </h1>

            <Formik
                initialValues={ initialValues }
                onSubmit= {( values ) => {
                    console.log( values );
                }}
                validationSchema={ validationSchema }
            >
                {
                    ( formik ) => (
                        <Form noValidate>
                            { formJson.map(({ type, name, placeholder, label, options }) => {
                                if( type === 'input' || type === 'password' || type === 'email'){
                                    return <MyTextInput
                                        key={ name }
                                        type={ (type as any) } 
                                        label={ label } 
                                        name={ name } 
                                        placeholder={ placeholder } 
                                    />
                                }
                                return (
                                    <MySelect key={ name } name={ name } label={ label }>
                                        {
                                            options?.map( ({ id, value }) => 
                                                <option key={ id } value={ id }>{ value }</option> 
                                            )
                                        }
                                    </MySelect>
                                )
                                   
                            })}
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
