import { NavLink } from "react-router-dom";
import css from "./right.module.scss";

function Right() {
    return (
        <ul className={css.right}>
            <li>
                <NavLink>Liên Hệ</NavLink>
            </li>
            <li>
                <NavLink>Đăng Nhập</NavLink>
            </li>
        </ul>
    )
}

export default Right