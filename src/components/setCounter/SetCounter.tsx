import React from 'react'
import S from '../counter/Counter.module.css'
import Button from '../button/Button'
import {Input} from '../input/Input'

type SetCounterPropsType = {
    onInputFocus: boolean
    maxCount: number
    minCount: number
    onChangeInputMaxCount: (value: number) => void
    onChangeInputMinCount: (value: number) => void
    onFocusInputChange: () => void
    setValuesIntoLocal: () => void
    error: boolean
    setErrorValue: () => void
    unSetErrorValue: () => void
    difference:number
}

export const SetCounter = (props: SetCounterPropsType) => {
    return (
        <section className={S.counter}>
            <span className={`${S.counter__display} ${S.counter__inputs}`}>
                <Input title={'max value'}
                       value={props.maxCount}
                       onChange={props.onChangeInputMaxCount}
                       error={props.error}
                       onFocusInputChange={props.onFocusInputChange}
                       setErrorValue={props.setErrorValue}
                       unSetErrorValue={props.unSetErrorValue}
                       difference={props.difference}
                />

                <Input title={'start value'}
                       value={props.minCount}
                       onChange={props.onChangeInputMinCount}
                       error={props.error}
                       onFocusInputChange={props.onFocusInputChange}
                       setErrorValue={props.setErrorValue}
                       unSetErrorValue={props.unSetErrorValue}
                       difference={props.difference}
                />
            </span>

            <div className={S.counter__btn_box}>
                <Button name={'SET'}
                        disabled={!props.onInputFocus || props.error}
                        onClick={props.setValuesIntoLocal}
                />
            </div>
        </section>
    )
}

