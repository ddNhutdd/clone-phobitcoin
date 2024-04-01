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
import { RadioButton } from 'src/components/radio-button';
import Input from 'src/components/input';

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
                            <RadioButton
                                id={`ERC20`}
                                name={`protocol`}
                            >
                                ERC20
                            </RadioButton>
                            <RadioButton
                                id={`BEP20`}
                                name={`protocol`}
                                checked={true}
                            >
                                BEP20 - BSC
                            </RadioButton>
                        </div>
                    </div>
                    <div className={css.sell__main__input}>
                        <label htmlFor="accountNumber">Số tài khoản</label>
                        <Input
                            id={`accountNumber`}
                            errorMessage={
                                <>
                                    Hãy cập nhật STK để Lần sau bạn sẽ không cần phải nhập STK nữa.
                                    <NavLink>Cập nhật STK TẠI ĐÂY</NavLink>
                                </>}
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label htmlFor="bank">Tại Ngân Hàng</label>
                        <Input
                            id={`bank`}
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label htmlFor="accountName">
                            Tên tài khoản nhận tiền
                        </label>
                        <Input
                            id={`accountName`}
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label htmlFor="total">Thành Tiền: </label>
                        <Input />
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