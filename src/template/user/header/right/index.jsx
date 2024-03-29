import { NavLink } from "react-router-dom";
import css from "./right.module.scss";
import { url } from "src/constants";

function Right() {
    return (
        <ul className={css.right}>
            <li>
                <NavLink to={url.contact}>Liên Hệ</NavLink>
            </li>
            <li>
                <NavLink to={url.profile}>Quản lí tài khoản</NavLink>
            </li>
            <li>
                <NavLink to={url.login}>Đăng Nhập</NavLink>
            </li>
        </ul>
    )
}

export default Right