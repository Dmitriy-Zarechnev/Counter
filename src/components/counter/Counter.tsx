import React from 'react'
import Button from '../button/Button'
import S from './Counter.module.css'

type CounterPropsType = {
    counter: number
    maxCount: number
    minCount: number
    changeCounter: () => void
    resetCounter: () => void
    onInputFocus: boolean
    error: boolean
}

const Counter = (props: CounterPropsType) => {

    const textStyles = `${S.counter__display} 
                               ${props.onInputFocus && S.onInputFocus}
                               ${props.counter === props.maxCount ? S.maxCount : ''}
                               ${props.error && S.error}
                               `
    const textValue =
        props.error
            ? 'Incorrect value🤬'
            : props.onInputFocus
                ? 'enter values and press \'SET\''
                : props.counter

    return (
        <section className={S.counter}>
            <span className={textStyles}>
                {textValue}
            </span>

            <div className={S.counter__btn_box}>
                <Button name={'INC'}
                        disabled={props.counter === props.maxCount || props.onInputFocus || props.error}
                        onClick={props.changeCounter}
                />
                <Button name={'RESET'}
                        disabled={props.counter === props.minCount || props.onInputFocus || props.error}
                        onClick={props.resetCounter}/>
            </div>
        </section>
    )
}

export default Counter