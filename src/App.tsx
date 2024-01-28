import React, {useState} from 'react'
import s from './App.module.css'
import Counter from './components/counter/Counter'


function App() {
    const maxCount = 5
    const minCount = 0
    const counterStep = 1

    const [counter, setCounter] = useState<number>(minCount)

    function changeCounter() {
        counter <= maxCount && setCounter(counter + counterStep)
    }

    function resetCounter() {
        setCounter(minCount)
    }


    return (
        <div className={s.app}>
            <Counter counter={counter}
                     maxCount={maxCount}
                     minCount={minCount}
                     changeCounter={changeCounter}
                     resetCounter={resetCounter}
            />
        </div>
    )
}


export default App





