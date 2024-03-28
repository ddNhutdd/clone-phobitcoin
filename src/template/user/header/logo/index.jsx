import { NavLink } from 'react-router-dom';
import css from './logo.module.scss';
import { url } from 'src/constants';

function Logo() {
    return (
        <div className={css.logo}>
            <NavLink to={url.home}>
                Phố
                <span className='--text-orange ml-1'>Bitcoin</span>
            </NavLink>
        </div >
    )
}

export default Logo