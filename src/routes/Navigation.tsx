// import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
// import { routes } from './Routes';
// import { spawn } from 'child_process';
import { RegisterPage,FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from '../03-forms/pages';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>RegisterPage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>FormikBasic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>FormikYup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>FormikComponents</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>FormikAbstractation</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="formik-abstractation" element={ <FormikAbstraction /> } />
                    <Route path="formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="formik-components" element={ <FormikComponents /> } />
                    <Route path="formik-yup" element={ <FormikYupPage /> } />
                    <Route path="register" element={ <RegisterPage /> } />
                    
                    <Route path="/*" element={ <Navigate to="/register" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
