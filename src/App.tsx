import React, {useEffect, useState} from 'react'
import S from './App.module.css'
import Counter from './components/counter/Counter'
import {SetCounter} from './components/setCounter/SetCounter'


function App() {
    // const maxCountDef = 5
    // const minCountDef = 0
    const counterStep = 1


    const [counter, setCounter] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [minCount, setMinCount] = useState<number>(0)

    const [onInputFocus, setOnInputFocus] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    let difference = maxCount - minCount


    //  ------ Set 'counter', 'maxValueString' , 'minValueString' value into localStorage ------
    useEffect(() => {
        let valueString = localStorage.getItem('counterValue')
        let maxValueString = localStorage.getItem('MaxCounterValue')
        let minValueString = localStorage.getItem('MinCounterValue')

        if (valueString) setCounter(JSON.parse(valueString))
        if (maxValueString) setMaxCount(JSON.parse(maxValueString))
        if (minValueString) setMinCount(JSON.parse(minValueString))
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])


    //  ------ Change and Set 'counter' value into useState ------
    function changeCounter() {
        counter <= maxCount && setCounter(counter + counterStep)
    }

    function resetCounter() {
        setCounter(minCount)
    }

    //  ------  Set input 'value' into useState ------

    function onChangeInputMaxCount(value: number) {
        setMaxCount(value)
    }

    function onChangeInputMinCount(value: number) {
        setMinCount(value)
    }

    //  ------  Set input 'value' into useState ------
    function onFocusInputChange() {
        setOnInputFocus(true)
    }

    //  ------  Set input 'value' into useState ------
    useEffect(() => {
        localStorage.setItem('MaxCounterValue', JSON.stringify(maxCount))
        localStorage.setItem('MinCounterValue', JSON.stringify(minCount))
    }, [onInputFocus])


    function setValuesIntoLocal() {
        setOnInputFocus(false)
        setCounter(minCount)
    }

    //  ------  Set 'error' into useState ------

    function setErrorValue() {
        setError(true)
    }

    function unSetErrorValue() {
        setError(false)
    }

    return (
        <div className={S.app}>
            <SetCounter
                onInputFocus={onInputFocus}
                maxCount={maxCount}
                minCount={minCount}
                onChangeInputMaxCount={onChangeInputMaxCount}
                onChangeInputMinCount={onChangeInputMinCount}
                onFocusInputChange={onFocusInputChange}
                setValuesIntoLocal={setValuesIntoLocal}
                error={error}
                setErrorValue={setErrorValue}
                unSetErrorValue={unSetErrorValue}
                difference={difference}
            />

            <Counter counter={counter}
                     maxCount={maxCount}
                     minCount={minCount}
                     changeCounter={changeCounter}
                     resetCounter={resetCounter}
                     onInputFocus={onInputFocus}
                     error={error}
            />
        </div>
    )
}


export default App





