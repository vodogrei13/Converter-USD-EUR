// import css from './course.module.scss'
import { useState } from "react";
import css from './course.module.scss'

const changeIndex = 1.07

const InputField = (props) => {
    const { label, ...rest } = props
    
    return (
        <label>
            {label}
            <input {...rest} />
        </label>
    )
}

export const Converter = () => {
    const [usdValue, setUsdValue] = useState(1);
    const [euroValue, setEuroValue] = useState(1.07);

    const changeUsdValue = (e) => {
        const val = e.target.value
        setUsdValue(val)
        setEuroValue(Math.round(val * changeIndex * 100) / 100)
    }

    const changeEuroValue = (e) => {
        const val = e.target.value
        setEuroValue(val)
        setUsdValue(Math.round(val / changeIndex * 100) / 100)
    }

    return (
        <div className={css.converter}>
            <InputField
                label={'USD'}
                type='number'
                value={usdValue}
                onChange={changeUsdValue}
                className={css.input_usd}
            />
            <InputField
                label={'EUR'}
                type='number'
                value={euroValue}
                onChange={changeEuroValue}
                className={css.input_eur}
            />
        </div>
    )
}