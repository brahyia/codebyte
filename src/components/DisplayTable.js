import React, {Component} from 'react'

const displayTable = () => {

class App extends React.Component {
    state = {
        isLoading: true,
        users: [],
        error: null
    };
    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams").then(res => res.json()).then(result => this.setState({
                loading: false,
                users: result
            })).catch(console.log);
        });
    }
    componentDidMount() {
        this.getFetchUsers();
    }
    render() {
        const {
            users,
            error
        } = this.state;
        return (
          <React.Fragment>
          <h1>All User</h1>
          {
                error ? <p>
          {
                    error.message
                } < /p> : null}  {
                    users.map(user => {
                        const {
                            adderss,
                            name,
                            email
                        } = user;
                        return (
                        <div key={name}>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>Address: {adderss}</p>
                            <hr />
                        </div>
                        );
                    })
                } </React.Fragment> );
        }
    }
  return (
    <div>displayTable</div>
  )
}

export default displayTable

