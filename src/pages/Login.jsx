import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return alert("Email and password are required");
        }
        try {
            const url = "http://localhost:5000/auth/login"; // Adjust URL for login endpoint
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            console.log(result); // Handle result based on server response
        } catch (error) {
            alert("Error logging in. Please try again later.");
        }
    }

    const formStyle = {
        marginTop: '150px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '5px',
        display: 'block'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '15px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const spanStyle = {
        display: 'block',
        textAlign: 'center',
        marginTop: '10px'
    };

    return (
        <div style={formStyle}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='email' style={labelStyle}>E-mail</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder='Enter your email ...'
                        style={inputStyle}
                        value={loginInfo.email} />
                </div>
                <div>
                    <label htmlFor='password' style={labelStyle}>Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder='Enter your password ...'
                        style={inputStyle}
                        value={loginInfo.password} />
                </div>
                <button type='submit' style={buttonStyle}>Submit</button>
                <span style={spanStyle}>
                    Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign Up</Link>
                </span>
            </form>
        </div>
    );
}

export default Login;
