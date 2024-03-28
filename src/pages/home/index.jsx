import { useEffect, useState } from "react";
import { alertType } from "src/contexts/alert-context";
import useAlert from "src/hooks/alert-hook";
import css from './home.module.scss';
import { NavLink } from "react-router-dom";
import { IoIosCalendar } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import Paging from "src/components/paging";

function Home() {
    const list = [
        {
            id: 1,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`
        },
        {
            id: 2,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`
        },
        {
            id: 3,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`
        },
        {
            id: 4,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`
        }
    ]

    const alert = useAlert();

    const [page, setPage] = useState(1);
    const [totalPage] = useState(1000);

    useEffect(() => {
        alert.callAlert(alertType.info, 'Phố Bitcoin chỉ là bên mua bán tiền điện tử, không liên quan bất ki dự án nào. Nghiêm cấm hành vi sử dụng tiền không chính chủ không rõ nguồn gốc. Vui lòng đọc kỹ điều khoản khi giao dịch. https://phobitcoin.com/policy');


        return () => {
            alert.removeAllAlert();
        }
    }, [])

    const renderList = () => list.map(item =>
        <div key={item.id} className={css.home__item}>
            <div className={css.home__image}>
                <NavLink>
                    <img src={item.image} alt={item.catalogy} />
                </NavLink>
            </div>
            <div className={css.home__main}>
                <div className={css.header__title}>
                    {item.title}
                </div>
                <div className={css.header__content}>
                    {item.content}
                </div>
                <div className={css.header__footer}>
                    <div>
                        <IoIosCalendar />
                        {item.time}
                    </div>
                    <NavLink>
                        <FaFolder />
                        {item.catalogy}
                    </NavLink>
                </div>
            </div>
            <div className={css.header__line}></div>
        </div>)
    const pageChangeHandle = (page) => console.log(page);

    return (
        <div className={css.home}>
            {renderList()}
            <Paging
                page={page}
                setPage={setPage}
                totalPage={totalPage}
                onChange={pageChangeHandle}
            />
        </div>
    )
}

export default Home