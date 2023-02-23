import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate;
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://167.235.158.238:3001/login/', {
                email: email,
                password: password
            });
            console.log(response.data);
            localStorage.setItem("Token",response.data.accessToken)
            console.log(response.data.user.id);
            localStorage.setItem("userId",response.data.user.id)
            console.log(response.data.user.email);
            localStorage.setItem("email",response.data.user.email)
            navigate("/")
           
        } catch (error) {
            console.log(error);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "Login dark" : "Login"}>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
            <button onClick={toggleDarkMode}>Dark Mode</button>
        </div>
    );
}

export default Login;
