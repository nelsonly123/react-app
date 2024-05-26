import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Counter from './Components/Counter';

function App() {
  const [counter, setCounter] = useState([]);

  const handleAddCounter = () => {
    setCounter([...counter, uuidv4()])
  }

  const handleRemoveSingleCounter = (id) => {
    const newList = counter.filter((deleteId) => id !== deleteId);
    setCounter([...newList])
  }

  const handleRemoveAllCounter = () => {
    setCounter([])
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Vite + React + Tailwind</h1>
      <div className='overflow-auto h-64'>
        {counter.map((id) => 
          <ul key={id}>
            <Counter 
              id={id} 
              handleAddCounter={handleAddCounter} 
              handleRemoveSingleCounter={handleRemoveSingleCounter}
            />
          </ul>)}
        </div>
      <div className='text-2xl font-bold text-center'>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700" 
          onClick={() => handleAddCounter()}
          >
            Add Counter
            </button>
        <button 
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700" 
          onClick={() => handleRemoveAllCounter()}
          >
            Remove all counters
            </button>
      </div>
      <div>Do not read!dsadsafsfsafsfafa</div>
    </>
  )
}

export default App
