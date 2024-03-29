import { NavLink } from "react-router-dom";
import css from './menu.module.scss';
import { url } from "src/constants";

function Menu() {
    return (
        <ul className={css.menu}>
            <li>
                <NavLink to={url.transaction}>Giao Dịch</NavLink>
            </li>
            <li>
                <NavLink to={url.knowledge}>Kiến Thức</NavLink>
            </li>
            <li>
                <NavLink to={url.news}>Tin Tức</NavLink>
            </li>
            <li>
                <NavLink to={url.questionAnswer}>Hỏi Đáp</NavLink>
            </li>
        </ul>
    )
}

export default Menu