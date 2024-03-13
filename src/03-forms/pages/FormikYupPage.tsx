import { useFormik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';

export const FormikYupPage = () => {    

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log( values );
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                          .max(15, 'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
            lastName: Yup.string()
                         .max(10, 'Debe de tener 10 caracteres o menos')
                         .required('Requerido'),
            email: Yup.string()
                         .email('Debe de ser un email valido')
                         .required('Requerido')
        })
    });

    const { handleSubmit, touched, errors, getFieldProps } = formik;

    return (
        <div>
            <h1>Formik YUP Tutorial</h1>
            <form action="" noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input type="text"  { ...getFieldProps('firstName') }/>

                { errors.firstName && touched.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text"  { ...getFieldProps('lastName') }/>
                { errors.lastName && touched.lastName && <span>{errors.lastName}</span>}


                <label htmlFor="email">Email Address</label>
                <input type="email" { ...getFieldProps('email') } />
                { errors.email && touched.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
