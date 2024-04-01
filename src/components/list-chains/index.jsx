import { url } from 'src/constants'
import Button, { buttonType } from '../button'
import Card from '../card'
import Chains from './chains'
import css from './list-chains.module.scss'
import { useNavigate } from 'react-router-dom'

function ListChains() {
    const list = [
        {
            id: 1,
            image: 'https://phobitcoin.com/public/frontend//images/btc.ico',
            chain: 'Bitcoin',
            dollar: `69,662.00`,
            buyPrice: `1,785,108,620`,
            sellPrice: `1,806,527,959`
        },
        {
            id: 2,
            image: 'https://phobitcoin.com/public/frontend//images/btc.ico',
            chain: 'Bitcoin',
            dollar: `69,662.00`,
            buyPrice: `1,785,108,620`,
            sellPrice: `1,806,527,959`
        },
        {
            id: 3,
            image: 'https://phobitcoin.com/public/frontend//images/btc.ico',
            chain: 'Bitcoin',
            dollar: `69,662.00`,
            buyPrice: `1,785,108,620`,
            sellPrice: `1,806,527,959`
        }
    ]

    const navigate = useNavigate();

    const redirectPage = (page) => navigate(page)
    const renderlistChains = () => list.map(item => <Chains key={item.id} item={item} />)

    return (
        <div className={css.listChains}>
            {renderlistChains()}
            <Card className={css.listChains__last}>
                <div className={css.listChains__last__top}>
                    <img src="https://phobitcoin.com/public/frontend//images/altcoins.png" alt="coins" />
                    Hơn 30 Altcoin Khác
                </div>
                <Button onClick={redirectPage.bind(null, url.transaction)} type={buttonType.primary}>
                    Mua Bán Ngay
                </Button>
            </Card>
        </div>
    )
}

export default ListChains