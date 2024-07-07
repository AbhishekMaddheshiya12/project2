import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return alert("All fields are required");
        }
        try {
            const url = "http://localhost:5000/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            alert("Error signing up. Please try again later.");
        }
    }

    const formStyle = {
        marginTop:'150px',
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
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name' style={labelStyle}>Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder='Enter your name ...'
                        style={inputStyle}
                        value={signupInfo.name} />
                </div>
                <div>
                    <label htmlFor='email' style={labelStyle}>E-mail</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder='Enter your email ...'
                        style={inputStyle}
                        value={signupInfo.email} />
                </div>
                <div>
                    <label htmlFor='password' style={labelStyle}>Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder='Enter your password ...'
                        style={inputStyle}
                        value={signupInfo.password} />
                </div>
                <button type='submit' style={buttonStyle}>Submit</button>
                <span style={spanStyle}>
                    Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link>
                </span>
            </form>
        </div>
    );
}

export default SignUp;
