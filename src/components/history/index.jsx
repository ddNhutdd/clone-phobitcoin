import { actionType } from 'src/constants';
import Card from '../card';
import HistoryItem from './history-item';
import css from './history.module.scss';
import { NavLink } from 'react-router-dom';

function History() {
    const list = [
        {
            id: 1,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 2,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 3,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.sell,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 4,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 5,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 6,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.sell,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 7,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 8,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 9,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.sell,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 10,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 11,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.buy,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        },
        {
            id: 12,
            image: 'https://phobitcoin.com/public/frontend//images/sol.png',
            info: `HUT...64`,
            action: actionType.sell,
            amount: 3,
            chain: 'SOL',
            time: 5,
            price: `4,808,122.05đ`
        }
    ]

    const renderListHistory = () => list.map(item => <HistoryItem key={item.id} item={item}></HistoryItem>)
    return (
        <Card className={css.history}>
            <h2 className='--text-blue'>Lịch Sử</h2>
            <div className={css.history__content}>
                {renderListHistory()}
            </div>
            <div className={`${css.history__more}`}>
                <NavLink className={'--text-blue'}>Xem Thêm</NavLink>
            </div>
        </Card>
    )
}

export default History