import React from 'react';
import Title from './Title'
import Birthdays from './Birthdays'
import './App.css';

function App() {
  return (
    <div>
      < Title title="Birthdays" />

      < Birthdays name="Kathryn Pawl" birthMonth="June" birthDay="12" birthYear="1995" age="21" />
    </div>
  );
}

export default App;
