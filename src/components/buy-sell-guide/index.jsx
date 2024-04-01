import { NavLink } from 'react-router-dom';
import css from './buy-sell-guide.module.scss';
import Card from '../card';

function BuySellGuide() {
    return (
        <Card className={css.BuySellGuide__guide}>
            <div className={css.BuySellGuide__guide__container}>
                <div className={css.BuySellGuide__guide__title}>Hướng dẫn giao dịch</div>
                <ul>
                    <li>Bạn vui lòng nhập số lượng ETH muốn bán</li>
                    <li>Điền số tài khoản ngân hàng VCB</li>
                    <li>Bấm vào nút &quot;Tiếp tục&quot;</li>
                    <li>Đăng nhập và thanh toán bằng tài khoản ETH của bạn</li>
                    <li>Hệ thống sẽ chuyển tiền cho bạn trong giây lát</li>
                </ul>
                <div className={css.BuySellGuide__guide__title}>Chú ý</div>
                <ul>
                    <li>Tuyệt đối không đưa link đơn hàng cho người khác.</li>
                    <li>
                        Số tiền đã bao gồm tất cả các chi phí giao dịch, chi tiết phí giao dịch vui lòng xem tại phần
                        {" "}
                        <NavLink>
                            Hỗ Trợ.
                        </NavLink>
                    </li>
                    <li>Hệ Thống sẽ tính toán chốt lại giá và số lượng tại thời điểm hệ thống nhận được thanh toán. Do đó mọi nỗ lực gian lận sẽ không có kết quả.</li>
                </ul>
            </div>
        </Card>
    )
}

export default BuySellGuide