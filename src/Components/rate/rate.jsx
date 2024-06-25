import css from './rate.module.scss'
import { Converter } from '../course/course'

export const Rate = () => {

    return (
        <div className={css.container}>
            <h3 className={css.title}>1 Доллар США равен<br/><span className={css.title_span}>1,07 Евро</span></h3>
        <div className={css.rate_input}>
            <Converter/>
        </div>
        </div>

    )
}