import { useEffect } from "react";
import css from "src/pages/sell/sell.module.scss";
import { useDispatch } from "react-redux";
import { setShowContentSidebar, sidebarContent } from "src/redux/slices/user-template";
import { sidebarDefault } from "src/constants";
import useAlert from "src/hooks/alert-hook";
import { alertType } from "src/contexts/alert-context";
import BuySellGuide from "src/components/buy-sell-guide";
import Card from "src/components/card";
import Button, { buttonType } from "src/components/button";
import { NavLink } from "react-router-dom";
import Input from "src/components/input";
import InputNumber from "src/components/input-number";
import { Captcha } from "src/components/captcha";


function Buy() {
    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(() => {
        dispatch(setShowContentSidebar({
            [sidebarContent.chains]: true
        }))

        alert.callAlert(alertType.info, `Phố Bitcoin chỉ là bên mua bán tiền điện tử, không liên quan bất ki dự án nào. Nghiêm cấm hành vi sử dụng tiền không chính chủ không rõ nguồn gốc. Vui lòng đọc kỹ điều khoản khi giao dịch. https://phobitcoin.com/policy`);

        return () => {
            dispatch(setShowContentSidebar(sidebarDefault));
            alert.removeAllAlert();
        }
    }, [])

    return (
        <div className={css.sell}>
            <Card className={css.sell__main}>
                <div className={css.sell__main_header}>
                    Giao Dịch Mua Bitcoin (BTC)
                </div>
                <div className={css.sell__main__content}>
                    <div className={css.sell__main__input}>
                        <label>Chúng tôi còn</label>
                        <InputNumber
                            text="ETH"
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label>Số lượng cần mua</label>
                        <InputNumber
                            text="ETH"
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label>Thành tiền</label>
                        <InputNumber
                            disabled
                            text="ETH"
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label>Địa chỉ ETH của bạn</label>
                        <Input
                            placeholder={`Vd: 0x61d12450e1dF6EA3391919872272577e`}
                            text="ETH"
                        />
                    </div>
                    <div className={css.sell__main__input}>
                        <label>Nhập dãy số captcha</label>
                        <div className="flex justify-end justify-md-start">
                            <Captcha />
                        </div>
                    </div>
                    <div className={css.sell__main__input}>
                        <label></label>
                        <Input
                            placeholder={`Nhập captcha`}
                        />
                    </div>
                </div>
                <div className={css.sell__main__footer}>
                    <Button
                        type={buttonType.oneTime}
                    >
                        Tiếp tục
                    </Button>
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

export default Buy