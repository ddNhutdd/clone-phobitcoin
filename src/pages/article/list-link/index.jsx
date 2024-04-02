import { NavLink } from "react-router-dom";
import css from './list-link.module.scss';

function ListLink() {
    return (
        <ul className={css.listLink}>
            <li>
                <NavLink>
                    Truy cập trang mua bán coin nhanh.
                </NavLink>
            </li>
            <li>
                <NavLink>
                    Hướng dẫn mua bán tại Phố Bitcoin.
                </NavLink>
            </li>
            <li>
                <NavLink>
                    Hướng dẫn Thanh toán hàng hóa, dịch vụ Quốc Tế
                </NavLink>
            </li>
        </ul>
    )
}

export default ListLink