import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './helpers/api.js';

class Users extends React.Component {
    state = {
        users: [],
    }

    async componentDidMount() {
        try {
            const result = await api.get('/users');

            this.setState({
                users: result.data,
            })
            console.log(result);
        } catch (err) {
            if (err.response.status === 401 || err.response.status === 403) {
                this.props.history.push('/login');
            } else {
                console.log(err);
            }
        }
    }

    render() {
        return (
            <div>
                <h3>Users</h3>

                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={i}>{user.username}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(Users);