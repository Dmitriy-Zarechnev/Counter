import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    disabled: boolean
    onClick: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <button
            disabled={props.disabled}
            className={s.button}
            onClick={props.onClick}
        >{props.name}
        </button>
    )
}

export default Button