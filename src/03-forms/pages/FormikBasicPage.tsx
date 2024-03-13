import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface formValues {
    firstName: string;
    lastName:  string;
    email:     string;
}


export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }: formValues ) => {
        const errors: FormikErrors<formValues> = {};
        if(!firstName ) {
            errors.firstName = 'Required';
        }else if(firstName.length >= 15){
            errors.firstName = 'Must be less than 15 characters';
        }

        if(!lastName ) {
            errors.lastName = 'Required';
        }else if(lastName.length >= 10){
            errors.lastName = 'Must be less than 10 characters';
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email )) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log( values );
        },
        validate
    });

    const { handleChange, handleSubmit, touched, handleBlur, errors } = formik;
    const { firstName, lastName, email } =  formik.values;
    

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form action="" noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    value={ firstName }
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    name='firstName'
                />

                { errors.firstName && touched.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    value={ lastName }
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    name='lastName'
                />
                { errors.lastName && touched.lastName && <span>{errors.lastName}</span>}


                <label htmlFor="email">Email Address</label>
                <input 
                    type="email"
                    value={ email }
                    onChange={ handleChange }
                    onBlur={ handleBlur } 
                    name='email'
                />
                 { errors.email && touched.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
