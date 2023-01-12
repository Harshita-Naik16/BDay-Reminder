import React from 'react'
import './dist/assets/index-7b2bc904.css'
import data from './src/modules/data'
import Person from './src/modules/Person'
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
