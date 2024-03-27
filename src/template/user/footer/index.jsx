import { NavLink } from "react-router-dom";
import css from "./footer.module.scss";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.container}>
                <div>Coppyright 2020 © Phố Bitcoin</div>
                <NavLink>Điều khoản sử dụng</NavLink>
                <div className="flex items-center gap-1">
                    <MdEmail />
                    phobitcoin.com@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer