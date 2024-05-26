import { useState, useEffect, useRef } from 'react';

export default function Counter({ id, handleRemoveSingleCounter}) {
    let [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => stopCounter();
    }, []);

    const incrementCounter = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrementCounter = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const handleResetCounter = () => {
        setCount(0);
    }

    const increaseCounter = () => {
        if(intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCount((prevCounter) => prevCounter + 1)
        }, 100);
    }

    const decreaseCounter = () => {
        if(intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCount((prevCounter) => prevCounter - 1)
        }, 100);
    }
    
    const stopCounter = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='flex justify-between bg-indigo-200 w-64'>
                <button 
                    id="increment-counter"
                    className="h-10 px-5 m-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    onClick={() => incrementCounter()}
                    onMouseDown={() => increaseCounter()}
                    onMouseUp={() => stopCounter()}
                    onMouseLeave={stopCounter}
                    >
                        +
                </button>
                <div className="flex items-center text-lg">Count is {count}</div>
                <button 
                    id="decrement-counter"
                    className="h-10 px-5 m-3 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
                    onClick={() => decrementCounter()}
                    onMouseDown={() => decreaseCounter()}
                    onMouseUp={() => stopCounter()}
                    onMouseLeave={stopCounter}
                    >
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
                        remove counter
                </button>
            </div>
        </div>
    )
}


