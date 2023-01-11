import React from 'react'
import './App.css'
import data from './data'
import Person from './Person'

function App() {
   const [click, setClick] = React.useState(true)

  function handleClick() {
    setClick(false)
  }
  return (
    <div className='reminder-card'>
      <h1>{click ? data.length : 0} birthdays today</h1>
      
      {click && data.map(person => {
        return (
          <Person 
          key={person.id}
          img={person.image}
          name={person.name}
          age={person.age}
        />
        )
        
      })}
      <button onClick={handleClick}>Clear All</button>
    </div>
  )
}

export default App
