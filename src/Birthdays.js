import React, { Component } from 'react'

class Birthdays extends Component {
  render() {
    const { name, birthMonth, birthYear, birthDay, age } = this.props;

    return (

      <div className="birthdays_">
        <div className="name">
          Name:{name}
        </div>

        <div className="birthdays birthMonth">
          {birthMonth}
        </div>

        <div className="birthdays birthDay">
          {birthDay}
        </div>

        <div className="birthdays birthYear">
          {birthYear}
        </div>

        <div className="birthdays age">
          Age: {age}
        </div>
      </div>

    )
  }
}


export default Birthdays