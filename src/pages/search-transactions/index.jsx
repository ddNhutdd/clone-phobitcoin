import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import Card from "src/components/card";
import { actionType, mediaBreakPoint, sidebarDefault } from "src/constants";
import { setShowContentSidebar, sidebarContent } from "src/redux/slices/user-template";
import css from './search-transactions.module.scss';
import HistoryItem from "src/components/history/history-item";
import Input from "src/components/input";
import Button, { buttonType } from "src/components/button";
import Paging from "src/components/paging";
import useMediaQuery from "src/hooks/use-media";

function SearchTransactions() {
    const dispatch = useDispatch();
    const media = useMediaQuery();
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

    const renderTransactions = () => list.map(item => <HistoryItem key={item.id} item={item}></HistoryItem>)
    const pageChangeHandle = (page) => console.log(page);
    const showSidebar = () => dispatch(setShowContentSidebar({
        [sidebarContent.chains]: true
    }));

    const [page, setPage] = useState(1);
    const [totalPage] = useState(100);

    useEffect(() => {
        showSidebar();

        return () => {
            dispatch(setShowContentSidebar(sidebarDefault))
        }
    }, [])
    useEffect(() => {
        const isEqualSmallTable = media === mediaBreakPoint.width_576 || media === mediaBreakPoint.width_768
        if (isEqualSmallTable) {
            dispatch(setShowContentSidebar({}));
        } else {
            showSidebar();
        }
    }, [media])

    return (
        <div className={css.searchTransactions}>
            <Card className={css.searchTransactions__card}>
                <div className={`${css.searchTransactions__header} ${`--header-component`}`}>
                    Tra Cứu Giao Dịch:
                </div>
                <div className={css.searchTransactions__body}>
                    <label htmlFor="transactionCode">
                        Mã giao dịch:
                    </label>
                    <Input id={`transactionCode`} />
                </div>
                <div className={css.searchTransactions__footer}>
                    <Button type={buttonType.danger}>
                        Kiểm tra
                    </Button>
                </div>
            </Card>
            <div className={css.searchTransactions__transaction}>
                <div className={css.searchTransactions__title}>
                    Tất cả giao dịch
                </div>
                <div className={css.searchTransactions__list}>
                    {renderTransactions()}
                </div>
                <div className={css.searchTransactions__paging}>
                    <Paging
                        page={page}
                        setPage={setPage}
                        totalPage={totalPage}
                        onChange={pageChangeHandle}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchTransactions