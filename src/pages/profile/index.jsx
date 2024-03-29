import Card from "src/components/card";
import css from './profile.module.scss';
import Button, { buttonType } from "src/components/button";
import { NavLink } from "react-router-dom";

function Profile() {
    return (
        <Card className={css.profile}>
            <div className={css.profile__header}>
                Thông tin tài khoản
            </div>
            <div className={css.profile__content}>
                <div className={css.profile__row}>
                    <div>Email:</div>
                    <div>dgxa9999@gmail.com</div>
                </div>
                <div className={css.profile__row}>
                    <div>Tên:</div>
                    <div>congnhut</div>
                </div>
                <div className={css.profile__row}>
                    <div>Số điện thoại:</div>
                    <div>0908370383</div>
                </div>
                <div className={css.profile__row}>
                    <div>Số Tài Khoản:</div>
                    <div>
                        00000000000
                        <Button type={buttonType.success}>Cập Nhật STK</Button>
                    </div>
                </div>
                <div className={css.profile__row}>
                    <div>Chủ Tài Khoản:</div>
                </div>
                <div className={css.profile__row}>
                    <div>Tại Ngân Hàng:</div>
                </div>
                <div className={css.profile__row}>
                    <div>Cấp độ tài khoản:</div>
                    <div className="--text-red">
                        Level 1
                        <Button type={buttonType.primary}>Xác minh</Button>
                    </div>
                </div>
                <div className={css.profile__row}>
                    <div>Link Giới Thiệu:</div>
                    <div>
                        <NavLink to={`https://phobitcoin.com/user/register?r=21292`}>
                            https://phobitcoin.com/user/register?r=21292
                        </NavLink>
                    </div>
                </div>
            </div>
        </Card >
    )
}

export default Profile