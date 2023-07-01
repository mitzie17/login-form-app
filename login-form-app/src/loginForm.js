import React from 'react'

export default class LoginForm extends React.Component {
    render(){
        return (
            <div className='loginDiv'>
                <h3>Login</h3>
                <form>
                <input type="text" id="username" className="form-control" placeholder='Username'></input> 
                <input type="text" id="password" className="form-control" placeholder='Password'></input>
                <button class="btn btn-primary">Submit</button>
            </form>
            </div>
            )
    }
}