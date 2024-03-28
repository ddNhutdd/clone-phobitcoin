import Table from 'src/components/table';
import css from './transaction.module.scss'
import Button, { buttonType } from 'src/components/button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template';
import { sidebarDefault } from 'src/constants';

function Transaction() {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: '1',
        },
        {
            title: 'AltCoin',
            dataIndex: 'alt',
            key: '2',
        },
        {
            title: <div className='flex items-center justify-center'>
                Giá Mua
            </div>,
            dataIndex: 'buy',
            key: '3',
        },
        {
            title: <div className='flex items-center justify-center'>
                Giá Bán
            </div>,
            dataIndex: 'sell',
            key: '4',
        }
    ];
    const dataSource = [
        {
            key: 1,
            stt: <span className={css.transaction__stt}>1</span>,
            alt: <div className={css.transaction__alt}>
                <img src="https://phobitcoin.com/public/frontend//images/btc.ico" alt="btc" />
                <span>
                    BTC
                </span>
            </div>,
            buy: <div className={`${css.transaction__action} ${css.first}`}>
                <span className='--text-red'>
                    1,802,464,492
                </span>
                <Button type={buttonType.danger}>
                    Bán Ngay
                </Button>
            </div>,
            sell: <div className={css.transaction__action}>
                <span className='--text-green'>
                    1,826,554,193
                </span>
                <Button type={buttonType.success}>
                    Mua Ngay
                </Button>
            </div>,
        },
        {
            key: 2,
            stt: <span className={css.transaction__stt}>2</span>,
            alt: <div className={css.transaction__alt}>
                <img src="https://phobitcoin.com/public/frontend//images/btc.ico" alt="btc" />
                <span>
                    BTC
                </span>
            </div>,
            buy: <div className={`${css.transaction__action} ${css.first}`}>
                <span className='--text-red'>
                    1,802,464,492
                </span>
                <Button type={buttonType.danger}>
                    Bán Ngay
                </Button>
            </div>,
            sell: <div className={css.transaction__action}>
                <span className='--text-green'>
                    1,826,554,193
                </span>
                <Button type={buttonType.success}>
                    Mua Ngay
                </Button>
            </div>,
        },
        {
            key: 3,
            stt: <span className={css.transaction__stt}>3</span>,
            alt: <div className={css.transaction__alt}>
                <img src="https://phobitcoin.com/public/frontend//images/btc.ico" alt="btc" />
                <span>
                    BTC
                </span>
            </div>,
            buy: <div className={`${css.transaction__action} ${css.first}`}>
                <span className='--text-red'>
                    1,802,464,492
                </span>
                <Button type={buttonType.danger}>
                    Bán Ngay
                </Button>
            </div>,
            sell: <div className={css.transaction__action}>
                <span className='--text-green'>
                    1,826,554,193
                </span>
                <Button type={buttonType.success}>
                    Mua Ngay
                </Button>
            </div>,
        }
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowContentSidebar({
            [sidebarContent.posts]: true,
            [sidebarContent.history]: true,
            [sidebarContent.chains]: false
        }))

        return () => {
            dispatch(setShowContentSidebar(sidebarDefault))
        }
    }, [])

    return (
        <div className={css.transaction}>
            <div className={css.transaction__header}>
                Mua bán Bitcoin, Ethereum, Tron, Ripple, BCH...
            </div>
            <Table data={dataSource} columns={columns} fetching={false} />
        </div>
    )
}

export default Transaction