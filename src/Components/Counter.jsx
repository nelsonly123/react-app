import { useState } from 'react';

export default function Counter({ id, handleRemoveSingleCounter}) {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const decrementCounter = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const handleResetCounter = () => {
        setCount(0);
    }

    return (
        <div className='flex justify-center'>
            <div className='flex justify-between bg-indigo-200 w-64'>
                <button 
                    className="h-10 px-5 m-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    onClick={() => incrementCounter(count)}>
                        +
                </button>
                <div className="flex items-center text-lg">Count is {count}</div>
                <button 
                    className="h-10 px-5 m-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    onClick={() => decrementCounter(count)}>
                        -
                </button>
            </div>
            <div className='flex justify-center'>
                <button className="h-10 px-5 m-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    onClick={() => handleResetCounter()}
                    >
                        reset counter
                </button>
                <button 
                    className="h-10 px-5 m-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700" 
                    onClick={() => handleRemoveSingleCounter(id)}
                    >
                        delete counter
                </button>
            </div>
        </div>
    )
}


