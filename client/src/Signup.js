import React from 'react';
import api from './helpers/api.js';

class Signup extends React.Component {
    state = {
        fullname: '',
        username: '',
        password: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        try {
            const result = await api.post('/register', {
                fullname: this.state.fullname,
                username: this.state.username,
                password: this.state.password,
            })

            console.log(result);
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
                <h3>Sign up</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="fullname" placeholder="Full Name" onChange=
                        {this.handleChange} value={this.state.fullname} />
                    <input type="text" name="username" placeholder="Username" onChange=
                        {this.handleChange} value={this.state.username} />
                    <input type="password" name="password" placeholder="Password" onChange=
                        {this.handleChange} value={this.state.password} />
                    <button typer="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default Signup;