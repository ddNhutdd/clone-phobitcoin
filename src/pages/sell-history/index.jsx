import { NavLink } from "react-router-dom"
import Table from "src/components/table";
import css from "./sell-history.module.scss"
import Spiner from "src/components/spiner";

function SellHistory() {

    const listCol = [
        {
            key: 'stt',
            title: `STT`
        },
        {
            key: 'mgd',
            title: 'Mã giao dịch'
        },
        {
            key: 'chain',
            title: 'Loại đồng'
        },
        {
            key: 'sl',
            title: 'Số lượng'
        },
        {
            key: 'gt',
            title: 'Giá trị'
        },
        {
            key: 'tg',
            title: 'Tỉ giá'
        },
        {
            key: "time",
            title: 'Thời gian'
        },
        {
            key: 'th',
            title: 'Trạng thái'
        }

    ]
    const data = [
        {
            key: '1',
            stt: '1',
            mgd: <NavLink className='--text-blue'>TSHF1704424028</NavLink>,
            chain: 'ETC',
            sl: '0.01',
            gt: '93043 VNĐ',
            tg: '503,344',
            time: `05-01-2024 | 10:07`,
            th: <Spiner />
        },
        {
            key: '2',
            stt: '2',
            mgd: <NavLink className='--text-blue'>TSHF1704424028</NavLink>,
            chain: 'ETC',
            sl: '0.01',
            gt: '93043 VNĐ',
            tg: '503,344',
            time: `05-01-2024 | 10:07`,
            th: <Spiner />
        },
        {
            key: '3',
            stt: '2',
            mgd: <NavLink>TSHF1704424028</NavLink>,
            chain: 'ETC',
            sl: '0.01',
            gt: '93043 VNĐ',
            tg: '503,344',
            time: `05-01-2024 | 10:07`,
            th: <Spiner />
        },
    ]

    return (
        <div className={css.buyHistory}>
            <div className={css.buyHistory__header}>Lịch sử mua</div>
            <div className={css.buyHistory__table}>
                <Table
                    columns={listCol}
                    data={data}
                />
            </div>
        </div>
    )
}

export default SellHistory