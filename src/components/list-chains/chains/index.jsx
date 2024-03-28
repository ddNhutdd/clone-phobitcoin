import Card from 'src/components/card';
import css from './chains.module.scss';
import Button, { buttonType } from 'src/components/button';
import PropTypes from 'prop-types';

function Chains(props) {
    const {
        item
    } = props;
    return (
        <Card className={`${css.chains}`}>
            <div className={css.chain__info}>
                <img src={item.image} alt={item.chain} />
                {item.chain}
                <div className={`${css.chain__dollar} ${`--text-blue`}`}>${item.dollar}</div>
            </div>
            <div className={css.action}>
                Giá Bán
                <span className={`${css.chains__price} --text-red`}>
                    {item.sellPrice}
                </span>
                <Button type={buttonType.danger}>Bán Ngay</Button>
            </div>
            <div className={css.action}>
                Giá Mua
                <span className={`${css.chains__price} --text-green`}>
                    {item.buyPrice}
                </span>
                <Button type={buttonType.success}>Mua Ngay</Button>
            </div>
        </Card>
    )
}

Chains.propTypes = {
    item: PropTypes.object,
};

export default Chains