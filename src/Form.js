import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', birthMonth: '', birthDay: '', birthYear: '', age: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (

      <form className="birthdayForm" onSubmit={this.handleSubmit}>

        <input className="inputField" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />

        <input type="text" className="inputField" value={this.state.birthMonth} placeholder="Month" onChange={(e) => this.setState({ birthMonth: e.target.value })} />

        <input type="text" className="inputField" placeholder="Day" value={this.state.birthDay} onChange={(e) => this.setState({ birthDay: e.target.value })}
        />

        <input type="text" className="inputField" placeholder="Year" value={this.state.birthYear} onChange={(e) => this.setState({ birthYear: e.target.value })} />

        <input type="text" className="inputField" placeholder="Age" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />

        <input type="submit" value="Submit" />

      </form>

    )
  }
}


export default Form 