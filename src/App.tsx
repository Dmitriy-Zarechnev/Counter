import React, {useEffect, useState} from 'react'
import S from './App.module.css'
import Counter from './components/counter/Counter'


function App() {
    const maxCount = 5
    const minCount = 0
    const counterStep = 1

    const [counter, setCounter] = useState<number>(minCount)

    /*
    useEffect(() => {
        let valueString = localStorage.getItem('counterValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

     */



    function changeCounter() {
        counter <= maxCount && setCounter(counter + counterStep)
    }

    function resetCounter() {
        setCounter(minCount)
    }

    return (
        <div className={S.app}>
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





