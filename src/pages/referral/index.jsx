import { NavLink } from 'react-router-dom'
import css from './referral.module.scss'

function Referral() {
    return (
        <div className={css.referral}>
            <div className={css.header}>Chương Trình Giới Thiệu</div>
            <p>Hiện tại bạn chưa có ai trong danh sách.</p>
            <p>
                Hãy chia sẻ link để nhận hoa hồng giới thiệu không giới hạn tại Phố Bitcoin. Chi tiết về chương trình giới thiệu mời khách hàng xem
                <NavLink>Tại Đây</NavLink>
                .
            </p>
            <p>
                <span className='--text-red'>
                    Link giới thiệu của bạn là:
                </span>
                <NavLink className={css['referral--bolder']}>
                    https://phobitcoin.com/user/register?r=21292
                </NavLink>
            </p>
        </div>
    )
}

export default Referral