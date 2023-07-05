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
        {counter.map((id) => 
          <div key={id}>
            <Counter 
              id={id} 
              handleAddCounter={handleAddCounter} 
              handleRemoveSingleCounter={handleRemoveSingleCounter}
            />
          </div>)}
      <div className='flex text-3xl font-bold text-center justify-center'>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700" 
          onClick={() => handleAddCounter()}
          >
            Add Counter
            </button>
        <button 
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700" 
          onClick={() => handleRemoveAllCounter()}
          >
            Remove all counters
            </button>
      </div>
    </>
  )
}

export default App
