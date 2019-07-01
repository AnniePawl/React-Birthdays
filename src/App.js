import React from 'react';
import Title from './Title'
import Birthdays from './Birthdays'
import Form from './Form'
import './App.css';

function App() {
  return (
    <div>
      < Title title="Birthdays" />
      < Form />

      < Birthdays name="Kathryn Pawl" birthMonth="June" birthDay="12" birthYear="1998" age="21" />

      < Birthdays name="Joey Pawl" birthMonth="October" birthDay="12" birthYear="1995" age="23" />

      < Birthdays name="Nancy Pawl" birthMonth="August" birthDay="17" birthYear="1953" age="65" />

      < Birthdays name="Gary Pawl" birthMonth="March" birthDay="07" birthYear="1953" age="66" />

      < Birthdays name="Sarah Fedorchick" birthMonth="April" birthDay="14" birthYear="1993" age="26" />

      < Birthdays name="Jessica O'Rourke" birthMonth="May" birthDay="05" birthYear="" age="" />

      < Birthdays name="Nicky Luzzi" birthMonth="January" birthDay="21" birthYear="" age="" />

      < Birthdays name="Bill Fedorchick" birthMonth="January" birthDay="22" birthYear="" age="" />

      < Birthdays name="Donna Bellis" birthMonth="February" birthDay="08" birthYear="" age="" />

      < Birthdays name="Liana Fedorchick" birthMonth="May" birthDay="27" birthYear="" age="" />

      < Birthdays name="Sergio" birthMonth="May" birthDay="20" birthYear="" age="" />

      < Birthdays name="Nora Maetzener" birthMonth="June" birthDay="10" birthYear="" age="" />

      < Birthdays name="Rigel Harris" birthMonth="October" birthDay="07" birthYear="1992" age="26" />

      < Birthdays name="Clara Hinchcliffe" birthMonth="October" birthDay="07" birthYear="1992" age="26" />


    </div>
  );
}

export default App;
