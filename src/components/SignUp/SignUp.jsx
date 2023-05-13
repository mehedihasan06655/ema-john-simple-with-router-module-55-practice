import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import { AuthContext } from '../Header/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email,password);
        setError('')
        if(password !== confirmPassword){
            setError('Password Not Match')
            return;
        }
        if(password.length < 6) {
            setError('Type at least 6 character');
            return;
        }

        createUser (email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
            </div>
                <p className='error-text'><small>{error}</small></p>
               <input className="input-btn" type="submit" value="Sign Up" />
               <p><small>Already have an account?  <Link to='/login'>Login</Link></small></p>
        </form>
    );
};

export default SignUp;