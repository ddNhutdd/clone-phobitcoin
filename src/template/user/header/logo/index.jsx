import { NavLink } from 'react-router-dom';
import css from './logo.module.scss';

function Logo() {
    return (
        <div className={css.logo}>
            <NavLink to={`#`}>
                Phố
                <span className='--text-orange ml-1'>Bitcoin</span>
            </NavLink>
        </div >
    )
}

export default Logo