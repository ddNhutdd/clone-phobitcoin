import Card from "src/components/card";
import css from './p2p.module.scss'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "src/hooks/use-media";
import { mediaBreakPoint, sidebarDefault } from "src/constants";
import { setShowContentSidebar } from "src/redux/slices/user-template";
import Spiner from "src/components/spiner";
import Button, { buttonType } from "src/components/button";
import Input from "src/components/input";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import ModalContent from "./modal-content";

function P2p() {
    const dispatch = useDispatch();
    const media = useMediaQuery();

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



    useEffect(() => {
        if (media === mediaBreakPoint.width_576 || media === mediaBreakPoint.width_768) {
            dispatch(setShowContentSidebar({}))
        } else {
            dispatch(setShowContentSidebar(sidebarDefault))
        }

    }, [media])

    return (
        <Card className={css.p2p}>
            <div className={`${css.p2p__header} --header-component`}>
                Giao dịch mua Ethereum Classic ( ETC )
            </div>
            <div className={css.p2p__body}>
                <table>
                    <tbody>
                        <tr>
                            <th>Mã GD</th>
                            <td className="--text-green">TSHF1704424028</td>
                        </tr>
                        <tr>
                            <th>Thương Nhân</th>
                            <td>
                                <div className="--text-green --text-bold">Hoang Long: </div>
                                <div className="--text-red --text-bold">
                                    Vui lòng Liên hệ ngay zalo, phone Thương Nhân hoặc chat Messenger Support ở góc phải nếu cần hỗ trợ.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Địa chỉ ví</th>
                            <td className="--text-red">
                                0xecBE1ef64D79EA93d22E4cd3DDe6d8ef2Dcf975D
                            </td>
                        </tr>
                        <tr>
                            <th>Trạng thái</th>
                            <td>
                                <div className="flex items-center gap-1 --text-red ">
                                    <Spiner />
                                    Đang chờ thanh toán từ Ngân Hàng.
                                </div>
                                <div className="--text-blue">
                                    Vui lòng thanh toán và đợi confirm tại Link Blockchain
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Thanh Toán</th>
                            <td>
                                <div className="flex gap-2">
                                    <Button
                                        type={buttonType.success}
                                    >
                                        Mở Màn Hình Thanh Toán
                                    </Button>
                                    <Button
                                        type={buttonType.primary}
                                    >
                                        Xác Nhận Đã Thanh Toán
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Bạn nhận</th>
                            <td className="--text-bold --text-red">0.01 ETC</td>
                        </tr>
                        <tr>
                            <th>Tỉ giá</th>
                            <td className="--text-bold --text-red">503,344 VND</td>
                        </tr>
                        <tr>
                            <th>Số Tiền</th>
                            <td>
                                <span className="--text-bold --text-red">
                                    93,043 VND
                                </span> (Đã bao gồm phí giao dịch: 10 VNĐ và Phí chuyển: 88,000 VNĐ)
                            </td>
                        </tr>
                        <tr>
                            <th>Đánh giá</th>
                            <td>
                                <form className="flex gap-1">
                                    <Input />
                                    <Button
                                        type={buttonType.success}
                                    >
                                        Gửi
                                    </Button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th>Thời Gian</th>
                            <td className="--text-green --text-bold">
                                05-01-2024 | 10:07
                            </td>
                        </tr>
                        <tr>
                            <th>Ghi Chú</th>
                            <td>
                                <ul className="pl-5">
                                    <li>
                                        Vui lòng thanh toán đúng thông tin tại màn hình thanh toán trong thời gian quy định. Nếu bạn đã thanh toán có thể nhắn tin cho người bán ngay để họ kiểm tra.
                                    </li>
                                    <li>
                                        Chúng tôi chỉ mua bán tiền điện tử, không liên quan tới bất kì dự án nào.
                                    </li>
                                    <li>
                                        Khách hàng lưu ý chỉ giao dịch trên web. Các giao dịch bên ngoài Website chúng tôi sẽ không chịu trách nhiệm.
                                    </li>
                                    <li>
                                        Nếu khách hàng thanh toán bị chậm, lỗi ngân hàng... vui lòng liên hệ người bán để được hỗ trợ.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal
                classNames={{
                    modal: 'customModal',
                }}
                open={open}
                onClose={onCloseModal}
                center
                showCloseIcon={false}
            >
                <ModalContent></ModalContent>
            </Modal>
        </Card >
    )
}

export default P2p