import React from 'react';
import api from './helpers/api.js';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        try {
            const result = await api.post('/login', {
                username: this.state.username,
                password: this.state.password,
            })

            console.log(result);
            localStorage.setItem('token', result.data.token);
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange=
                        {this.handleChange} value={this.state.username} />
                    <input type="password" name="password" placeholder="Password" onChange=
                        {this.handleChange} value={this.state.password} />
                    <button typer="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;