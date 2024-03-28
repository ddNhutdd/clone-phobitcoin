import { actionType } from 'src/constants';
import css from './history-item.module.scss';
import PropTypes from 'prop-types';

function HistoryItem(props) {
    const { item } = props;

    const renderClassColor = () => item.action === actionType.buy ? '--text-green' : '--text-red'

    return (
        <div className={css.historyItem}>
            <div className={css.historyItem__record}>
                <div className={css.historyItem__image}>
                    <img src={item.image} alt={item.chain} />
                    <span className={css.historyItem__info}>
                        {item.info}
                    </span>
                </div>
                <div className='--text-orange'>
                    {item.time} phút trước
                </div>
            </div>
            <div className={css.historyItem__record}>
                <div className={`${css.historyItem__action} ${renderClassColor()}`}>
                    Mua {item.amount} {item.chain}
                </div>
                <div className={`${css.historyItem__price} ${renderClassColor()}`}>
                    Giá {item.price}
                </div>
            </div>
        </div>
    )
}

HistoryItem.propTypes = {
    item: PropTypes.object
};

export default HistoryItem