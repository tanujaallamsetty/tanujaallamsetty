import React, { useState } from 'react'; // Import the useState hook from React
import axios from 'axios';

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:8000/login', {
                email: email,
                password: password
            });

            if (response.data) {
                alert("Login Successful");
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error(error);
            alert("Login failed. Please try again later.");
        }
    };

    return (
        <div id='login'>
            <div className="login-form">
                <h3>Login</h3>
                <form onSubmit={handleRegister}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder='enter your Email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                            style={{marginLeft:75}}
                        />
                    </div><br></br> 
                    <div className="form-group">
                        <label htmlFor="password"> Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder='enter your password'
                            onChange={(e) => setpassword(e.target.value)}
                            required
                            style={{marginLeft:75}}
                        /> 
                    </div> <br></br>
                    <div id='btn'>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;