import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './SignInForm.css';


export const SignInForm: React.FC = () => {

    type UserData = {
        email: string,
        password: string,
        remember: boolean
    }

    const defaultUserData: UserData = {
        email: '',
        password: '',
        remember: false
    }

    const [user, setUser] = useState(defaultUserData)

    const onChange = <P extends keyof UserData>(prop: P, value: UserData[P]) => {
        setUser({ ...user, [prop]: value });
    }  


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/profile`;
        navigate(path)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if ((user.email !== '') && (user.password !== '')) {
            routeChange()
        }
    }

    



    return <>
        <div className='container center-align page-wrapper'>
            <div className='container'>
                <i className="large material-icons">account_circle</i>
            </div>

            <div className="row form-wrapper">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="    E-mail" 
                                id="email"
                                type="text"
                                className="validate"
                                required
                                onChange={(e) => onChange("email", e.target.value)} />
                            <label></label>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="    Password"
                                id="password"
                                type="text"
                                className="validate"
                                required
                                onChange={(e) => onChange("password", e.target.value)} />

                             <label></label>
                        </div>
                    </div>
                            
                    <p className="left-align">
                        <label>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                    </p>

                    <div className="row">
                        <a className='btn light-blue darken-3' type="submit" onClick={handleSubmit}>Sign in</a>
                    </div>

                </form>

                

                <div className="row bottom-links">
                    <a href="#"><div className="col s4 left-align">
                        Forgot password?
                    </div></a>
                    <a href="#"><div className="col s8 right-align">
                        Don't have an account? Sign Up!
                    </div></a>
                </div>

            </div>
        </div>       
    </>
}