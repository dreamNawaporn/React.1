import { useState } from 'react'
import List from './components/List'
import './App.css'
import data from "./data"

function App() {
  const [people, setPeople] = useState(data)
  const clearAll = () => {
    setPeople([])
  }
  
  return (
    <>
      <div>
        <h1>Worksohop 1:Birthday List</h1>
        <main>
        <section className='container'>
        <h3>{people.length}5 birthday today</h3>
        <List people = {people}/>
        <button onClick={clearAll}>Clear All</button>
        </section>
        </main>
    
      </div>
    
    </>
  )
}

export default App
