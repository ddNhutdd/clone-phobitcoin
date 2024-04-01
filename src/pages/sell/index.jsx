import { useEffect } from 'react';
import css from './sell.module.scss';
import { useDispatch } from 'react-redux';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template';
import { sidebarDefault } from 'src/constants';
import useAlert from 'src/hooks/alert-hook';
import { alertType } from 'src/contexts/alert-context';
import Card from 'src/components/card';
import Button, { buttonType } from 'src/components/button';
import InputNumber from 'src/components/input-number';
import { NavLink } from 'react-router-dom';

function Sell() {
    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(() => {
        dispatch(setShowContentSidebar({
            [sidebarContent.chains]: true,
        }))

        alert.callAlert(alertType.info, `Phố Bitcoin chỉ là bên mua bán tiền điện tử, không liên quan bất ki dự án nào. Nghiêm cấm hành vi sử dụng tiền không chính chủ không rõ nguồn gốc. Vui lòng đọc kỹ điều khoản khi giao dịch. https://phobitcoin.com/policy`)

        return () => {
            dispatch(setShowContentSidebar(sidebarDefault))
            alert.removeAllAlert();
        }
    }, [])

    return (
        <div className={css.sell}>
            <Card className={css.sell__main}>
                <div className={css.sell__main_header}>
                    Giao Dịch Bán Bitcoin (BTC)
                </div>
                <div className={css.sell__main}>
                    <div className={css.sell__main__input}>
                        <label htmlFor='amountEth'>Số lượng ETH bán</label>
                        <InputNumber
                            id='amountEth'
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label>Giao thức</label>
                        <div>

                        </div>
                    </div>
                </div>
                <div className={css.sell__main_footer}>
                    <Button type={buttonType.oneTime}>Tiếp tục</Button>
                    <div>
                        Vui lòng
                        <NavLink>
                            Đăng nhập
                        </NavLink>
                        hoặc
                        <NavLink>
                            Đăng ký
                        </NavLink>
                        tài khoản để giao dịch.
                    </div>
                </div>
            </Card>
            <Card className={css.sell__guide}></Card>
        </div>
    )
}

export default Sell