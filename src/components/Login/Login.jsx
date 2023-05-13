import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Header/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from)


    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <form onSubmit={handleLogin} className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type={show ? "text": "password"} name="password" id="password" />
                <p onClick={()=> setShow(!show)}><small>
                    {show ? <span>Hide Password</span> : <span>Show Password</span>}
                    </small></p>
            </div>
               <input className="input-btn" type="submit" value="Login" />
               <p className='error-text'><small>{error}</small></p>
               <p><small>New to ema John? <Link to='/signup'>Sign Up</Link></small></p>
        </form>
    );
};

export default Login;