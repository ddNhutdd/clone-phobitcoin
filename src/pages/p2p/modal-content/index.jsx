import Button, { buttonType } from 'src/components/button';
import css from "./modal-content.module.scss";

function ModalContent(props) {
    const {
        closeModal
    } = props;
    return (
        <div className={css.modalContent}>
            <div className={css.modalContent__header}>Màn hình thanh toán</div>
            <div className={css.modalContent__body}>
                <div>
                    Bạn đang mua 12 Tether (USDT) từ Phố Bitcoin về địa chỉ ví 0xa93d9a5400de6f610b5331cad1b6e3b9bbb0f4a1ca9d21f8c4dd50f3674e1a32 (Giao Thức: BEP20 ).
                    Vui lòng thanh toán đúng số tiền, nội dung và số tài khoản bên dưới.
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Số tiền
                            </td>
                            <td>
                                357,576
                            </td>
                            <td>
                                <Button type={buttonType.secondary}>
                                    Copy
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nội dung
                            </td>
                            <td>
                                PDMQ1711958125
                            </td>
                            <td>
                                <Button type={buttonType.secondary}>
                                    Copy
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Số tài khoản:
                            </td>
                            <td>
                                9988083784 tại Vietcombank
                                Chủ tài khoản: Lê Thị Thu Dung
                            </td>
                            <td>
                                <Button type={buttonType.secondary}>
                                    Copy
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Hoặc STK khác:
                            </td>
                            <td>
                                42882498113 tại TP Bank
                                Chủ tài khoản: Nguyễn Đăng
                            </td>
                            <td>
                                <Button type={buttonType.secondary}>
                                    Copy
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={css.modalContent__footer}>
                <Button
                    type={buttonType.success}
                >
                    Gửi hình ảnh thanh toán
                </Button>
                <Button
                    type={buttonType.danger}
                >
                    Đóng Lại
                </Button>
            </div>
        </div>
    )
}

export default ModalContent