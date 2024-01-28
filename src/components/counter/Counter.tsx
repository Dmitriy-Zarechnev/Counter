import React from 'react'
import Button from '../button/Button'
import s from './Counter.module.css'


type CounterPropsType = {
    counter: number
    maxCount: number
    minCount: number
    changeCounter: () => void
    resetCounter: () => void
}

const Counter = (props: CounterPropsType) => {
    return (
        <section className={s.counter}>
            <span className={
                props.counter === props.maxCount
                    ? `${s.counter__display} ${s.maxCount}`
                    : s.counter__display}>
                {props.counter}
            </span>

            <div className={s.counter__btn_box}>
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