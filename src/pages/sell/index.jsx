import { useEffect, useRef } from 'react';
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
import { validateCaptcha } from 'react-simple-captcha';
import { Captcha } from 'src/components/captcha';
import BuySellGuide from 'src/components/buy-sell-guide';

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

    const captchaInputElement = useRef(null);

    const validateCapcha = () => {
        let user_captcha_value = captchaInputElement.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            console.log('capcha matched');
        } else {
            console.log('Captcha Does Not Match');
        }
    }

    return (
        <div className={css.sell}>
            <Card className={css.sell__main}>
                <div className={css.sell__main_header}>
                    Giao Dịch Bán Bitcoin (BTC)
                </div>
                <div className={css.sell__main__content}>
                    <div className={css.sell__main__input}>
                        <label
                            htmlFor='amountEth'
                            className='--text-pink'
                        >
                            Số lượng ETH bán
                        </label>
                        <InputNumber
                            id='amountEth'
                            text='ETH'
                            errorMessage='Số tiền bạn nhập vượt quá số dư hiện có của chúng tôi'
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label className='--text-pink'>
                            Giao thức
                        </label>
                        <div className={css.sell__radioContainer}>
                            <RadioButton
                                id={'ERC20'}
                                name={`protocol`}
                                className={css.sell__radioItem}
                            >
                                ERC20
                            </RadioButton>
                            <RadioButton
                                id={'BEP20'}
                                name={`protocol`}
                                checked={true}
                                className={css.sell__radioItem}
                            >
                                BEP20 - BSC
                            </RadioButton>
                        </div>
                    </div>
                    <div className={css.sell__main__input}>
                        <label htmlFor="accountNumber">Số tài khoản</label>
                        <Input
                            id={'accountNumber'}
                            errorMessage={
                                <div className={css.sell__main__input__error}>
                                    Hãy cập nhật STK để Lần sau bạn sẽ không cần phải nhập STK nữa.
                                    {" "}
                                    <NavLink>Cập nhật STK TẠI ĐÂY</NavLink>
                                </div>}
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
                            id={'accountName'}
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label htmlFor="total">Thành Tiền: </label>
                        <InputNumber
                            text='VND'
                            disabled={true}
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label>Nhập dãy số captcha</label>
                        <div className='flex justify-end justify-md-start'>
                            <Captcha />
                        </div>
                    </div>
                    <div className={css.sell__main__input}>
                        <div></div>
                        <div>
                            <Input
                                ref={captchaInputElement}
                                placeholder="Nhập captcha"
                                type="text" />
                        </div>

                    </div>
                </div>
                <div className={css.sell__main__footer}>
                    <Button onClick={validateCapcha} type={buttonType.oneTime}>Tiếp tục</Button>
                    <div className={css.sell__main__footer__message}>
                        Vui lòng
                        {" "}
                        <NavLink>
                            Đăng nhập
                        </NavLink>
                        {" "}
                        hoặc
                        {" "}
                        <NavLink>
                            Đăng ký
                        </NavLink>
                        {" "}
                        tài khoản để giao dịch.
                    </div>
                </div>
            </Card>
            <BuySellGuide />
        </div>
    )
}

export default Sell