import Button, { buttonType } from 'src/components/button';
import css from "./modal-content.module.scss";
import PropTypes from 'prop-types';
import CopyButton from 'src/components/copy-button';
import { useState } from 'react';

function ModalContent(props) {
    const {
        closeModal,
        qrImage
    } = props;

    const [money] = useState(`357,576`);
    const [contentTransfer] = useState(`PDMQ1711958125`);
    const [accountNumber] = useState(`9988083784`);
    const [accountNumberAlt] = useState(`42882498113`);

    return (
        <div className={css.modalContent}>
            <div className={css.modalContent__header}>
                Màn hình thanh toán
            </div>
            <div className={css.modalContent__body}>
                <div>
                    Bạn đang mua
                    {" "}
                    <span className='--text-red --text-bold'>
                        12 Tether (USDT)
                    </span>
                    {" "}
                    từ
                    {" "}
                    <span className='--text-blue'>
                        Phố Bitcoin
                    </span>
                    {" "} về địa chỉ ví
                    {" "}
                    <span className='--text-red'>
                        0xa93d9a5400de6f610b5331cad1b6e3b9bbb0f4a1ca9d21f8c4dd50f3674e1a32
                    </span>
                    {" "}
                    (Giao Thức: BEP20 ).
                    Vui lòng thanh toán
                    {" "}
                    <span className='--text-blue --text-bold'>
                        đúng số tiền, nội dung và số tài khoản bên dưới.
                    </span>
                </div>
                <div className={css.modalContent__table}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Số tiền
                                </td>
                                <td className='--text-green --text-bold'>
                                    {money}
                                </td>
                                <td>
                                    <CopyButton value={money} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Nội dung
                                </td>
                                <td className='--text-green --text-bold'>
                                    {contentTransfer}
                                </td>
                                <td>
                                    <CopyButton value={contentTransfer} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Số tài khoản:
                                </td>
                                <td>
                                    <span className='--text-green --text-bold'>
                                        {accountNumber}
                                    </span>
                                    {" "}
                                    tại
                                    {" "}
                                    <span className='--text-blue --text-bold'>
                                        Vietcombank
                                    </span>
                                    {" "}
                                    Chủ tài khoản:
                                    {" "}
                                    <span className='--text-bold --text-red'>
                                        Lê Thị Thu Dung
                                    </span>
                                </td>
                                <td>
                                    <CopyButton value={accountNumber} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Hoặc STK khác:
                                </td>
                                <td>
                                    <span className='--text-bold --text-green'>
                                        {accountNumberAlt}
                                    </span>
                                    tại
                                    {" "}
                                    <span className='--text-blue --text-bold'>
                                        TP Bank
                                    </span>
                                    {" "}
                                    Chủ tài khoản:
                                    {" "}
                                    <span className='--text-bold --text-red'>
                                        Nguyễn Đăng
                                    </span>
                                </td>
                                <td>
                                    <CopyButton value={accountNumberAlt} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={css.modalContent__qr}>
                    <img className='w-100' src={qrImage} alt="qr" />
                </div>
            </div>
            <div className={css.modalContent__footer}>
                <Button
                    type={buttonType.success}
                >
                    Gửi hình ảnh thanh toán
                </Button>
                <Button
                    onClick={closeModal}
                    type={buttonType.danger}
                >
                    Đóng Lại
                </Button>
            </div>
        </div>
    )
}

ModalContent.propTypes = {
    closeModal: PropTypes.func,
    qrImage: PropTypes.string
}

export default ModalContent