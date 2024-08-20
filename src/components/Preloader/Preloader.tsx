
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.preloader__container}>
                <span className={s.preloader__round}></span>
            </div>
        </div>
    )
};

export default Preloader