import { NavLink } from 'react-router-dom'
import css from './sidebar.module.scss';
import { FaUserCog } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import Card from 'src/components/card';
import { url } from 'src/constants';

function Sidebar() {
    return (
        <Card className={css.sidebar}>
            <NavLink to={url.profile}>
                <FaUserCog />
                Tài Khoản
            </NavLink>
            <NavLink to={url.referral}>
                <FaListUl />
                Referral
            </NavLink>
            <NavLink to={url.buyHistory}>
                <FaArrowRightToBracket />
                Lịch sử mua
            </NavLink>
            <NavLink to={url.sellHistory}>
                <FaArrowRightFromBracket />
                Lịch sử bán
            </NavLink>
            <NavLink to={url.changePassword}>
                <MdOutlinePassword />
                Đổi mật khẩu
            </NavLink>
            <NavLink>
                <AiOutlineLogout />
                Đăng xuất
            </NavLink>
        </Card>
    )
}

export default Sidebar