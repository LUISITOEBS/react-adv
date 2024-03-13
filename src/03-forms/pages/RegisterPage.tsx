import { inputDataProps } from '../interfaces/interfaces';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
import { FormEvent } from 'react';

const registerDataInputs: inputDataProps = {
    name: '',
    email: '',
    password1: '',
    password2: '',
}

export const RegisterPage = () => {

   const { name, email, password1, password2, onChange, resetForm, isValidEmail } = useForm( registerDataInputs );

   const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log( name, email, password1, password2 );
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form action="" noValidate onSubmit={ onSubmit }>

                <input
                    className={ `${name.trim().length <= 0 && "has-error"}` }
                    name="name"
                    placeholder="Name"
                    onChange={ onChange }
                    required
                    type="text"
                    value={ name }
                />
                { name.trim().length <= 0 && <span>Este campo es requerido</span> }
                

                <input
                    className={ `${ !isValidEmail( email )  && "has-error"}` }
                    name="email"
                    placeholder="Email"
                    onChange={ onChange }
                    required
                    type="email" 
                    value={ email }
                />
                { !isValidEmail( email ) && <span>Este campo es requerido</span> }

                <input
                    className=''
                    name="password1"
                    placeholder="Password"
                    onChange={ onChange }
                    required
                    type="password" 
                    value={ password1 }
                />
                { password1.trim().length <= 0 && <span>Este campo es requerido</span> }
                { password1.trim().length > 6 &&  password1.trim().length > 0 && <span>La contraseña es menor de 6 caracteres</span> }

                <input 
                    name="password2"
                    placeholder="Repeat Password"
                    onChange={ onChange }
                    required
                    type="password" 
                    value={ password2 }
                />
                { password2.trim().length <= 0 && <span>Este campo es requerido</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no son iguales</span> }

                <button type="submit">
                    Create
                </button>

                <button type="button" onClick={ resetForm }>
                    Reset
                </button>
            </form>
        </div>
    )
}
