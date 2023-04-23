import React, { Component } from 'react'

export default class UsersForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            name : "",
            email: "",
            gen: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            gen:this.state.gen
        }
         this.props.handleAddUser(newUser);
        this.setState({ name:"", email:"" , gen:""})
        console.log(newUser)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h1>class form</h1>
            <label>
                name: <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
                email: <input type="email" name='email' value={this.state.email} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
                gen: <input type="text" name='gen' value={this.state.gen} onChange={this.handleChange}/>
            </label>
            <br />
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
