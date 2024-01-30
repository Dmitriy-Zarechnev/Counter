import React, {ChangeEvent} from 'react'
import S from './Input.module.css'

type InputPropsType = {
    title: string
    value: number
    onChange: (value: number) => void
    error: boolean
    onFocusInputChange: () => void
    setErrorValue: () => void
    unSetErrorValue: () => void
    difference: number
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        props.onChange(newValue)

        if (newValue < 0 || props.difference < 0) {
            props.setErrorValue()
        } else {
            props.unSetErrorValue()
        }
    }

    const onFocusInputHandler = () => {
        props.onFocusInputChange()
    }

    return (
        <div className={S.input_box}>
            <span className={S.title}>{props.title}:</span>
            <input
                onChange={onChangeInputHandler}
                value={props.value}
                type={'number'}
                className={`${S.input} ${props.error && S.error}`}
                onFocus={onFocusInputHandler}
            />
        </div>
    )
}

