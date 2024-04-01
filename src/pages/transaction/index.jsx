import Table from 'src/components/table';
import css from './transaction.module.scss'
import Button, { buttonType } from 'src/components/button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template';
import { sidebarDefault, url } from 'src/constants';
import { useNavigate } from 'react-router-dom';

function Transaction() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirectPage = (page) => navigate(page);

    const columns = [
        {
            title: 'STT',
            key: 'stt',
        },
        {
            title: 'AltCoin',
            key: 'alt',
        },
        {
            title: <div className='flex items-center justify-center'>
                Giá Mua
            </div>,
            key: 'buy',
        },
        {
            title: <div className='flex items-center justify-center'>
                Giá Bán
            </div>,
            key: 'sell',
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
            buy: <div className={css.transaction__action}>
                <span className='--text-green'>
                    1,826,554,193
                </span>
                <Button
                    onClick={redirectPage.bind(null, url.buy)}
                    type={buttonType.success}
                >
                    Mua Ngay
                </Button>
            </div>,
            sell: <div className={`${css.transaction__action} ${css.first}`}>
                <span className='--text-red'>
                    1,802,464,492
                </span>
                <Button
                    onClick={redirectPage.bind(null, url.sell)}
                    type={buttonType.danger}
                >
                    Bán Ngay
                </Button>
            </div>,
        },
        {
            key: 2,
            stt: <span className={css.transaction__stt}>1</span>,
            alt: <div className={css.transaction__alt}>
                <img src="https://phobitcoin.com/public/frontend//images/btc.ico" alt="btc" />
                <span>
                    BTC
                </span>
            </div>,
            buy: <div className={css.transaction__action}>
                <span className='--text-green'>
                    1,826,554,193
                </span>
                <Button
                    onClick={redirectPage.bind(null, url.buy)}
                    type={buttonType.success}
                >
                    Mua Ngay
                </Button>
            </div>,
            sell: <div className={`${css.transaction__action} ${css.first}`}>
                <span className='--text-red'>
                    1,802,464,492
                </span>
                <Button
                    onClick={redirectPage.bind(null, url.sell)}
                    type={buttonType.danger}
                >
                    Bán Ngay
                </Button>
            </div>,
        },
        {
            key: 3,
            stt: <span className={css.transaction__stt}>1</span>,
            alt: <div className={css.transaction__alt}>
                <img src="https://phobitcoin.com/public/frontend//images/btc.ico" alt="btc" />
                <span>
                    BTC
                </span>
            </div>,
            buy: <div className={css.transaction__action}>
                <span className='--text-green'>
                    1,826,554,193
                </span>
                <Button
                    onClick={redirectPage.bind(null, url.buy)}
                    type={buttonType.success}
                >
                    Mua Ngay
                </Button>
            </div>,
            sell: <div className={`${css.transaction__action} ${css.first}`}>
                <span className='--text-red'>
                    1,802,464,492
                </span>
                <Button
                    onClick={redirectPage.bind(null, url.sell)}
                    type={buttonType.danger}
                >
                    Bán Ngay
                </Button>
            </div>,
        }
    ];

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