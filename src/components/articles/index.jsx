import { NavLink } from 'react-router-dom';
import css from './articles.module.scss';

import { FaFolder } from 'react-icons/fa';
import Paging from '../paging';
import { useState } from 'react';
import Time from '../time';
import { url } from 'src/constants';

function Articles() {
    const list = [
        {
            id: 1,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`,
            url: url.article
        },
        {
            id: 2,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`,
            url: url.article
        },
        {
            id: 3,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`,
            url: url.article
        },
        {
            id: 4,
            image: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            title: `Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?`,
            content: `nay tình cờ đọc được quá nhiều bài viết về tình trạng tài khoản tiền điện tử bị Hack, bị sàn khóa, bitcoin không cánh mà bay….Nên mới quyết định viết 1 bài viết để giải thích và hướng dẫn cho mọi người thật dễ hiểu. Do đó bài viết này sẽ sử dụng văn phong như một cuộc trò chuyện.`,
            time: `03/06/2023 | 14:28`,
            catalogy: `Kiến Thức`,
            url: url.article
        }
    ]

    const [page, setPage] = useState(1);
    const [totalPage] = useState(1000);

    const renderList = () => list.map(item =>
        <div key={item.id} className={css.articles__item}>
            <div className={css.articles__image}>
                <NavLink to={item.url}>
                    <img src={item.image} alt={item.catalogy} />
                </NavLink>
            </div>
            <div className={css.articles__main}>
                <NavLink to={item.url} className={css.header__title}>
                    {item.title}
                </NavLink>
                <div className={css.header__content}>
                    {item.content}
                </div>
                <div className={css.header__footer}>
                    <div>
                        <Time time={item.time} />
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
        <div className={css.articles}>
            {renderList()}
            <Paging
                page={page}
                setPage={setPage}
                totalPage={totalPage}
                onChange={pageChangeHandle}
            /></div>
    )
}

export default Articles