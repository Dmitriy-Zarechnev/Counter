import React from 'react'
import Button from '../button/Button'
import S from './Counter.module.css'

type CounterPropsType = {
    counter: number
    maxCount: number
    minCount: number
    changeCounter: () => void
    resetCounter: () => void
}

const Counter = (props: CounterPropsType) => {
    return (
        <section className={S.counter}>
            <span className={`${S.counter__display} ${props.counter === props.maxCount ? S.maxCount : ''}`}>
                {props.counter}
            </span>

            <div className={S.counter__btn_box}>
                <Button name={'inc'}
                        disabled={props.counter === props.maxCount}
                        onClick={props.changeCounter}
                />
                <Button name={'reset'}
                        disabled={props.counter === props.minCount}
                        onClick={props.resetCounter}/>
            </div>
        </section>
    )
}

export default Counter