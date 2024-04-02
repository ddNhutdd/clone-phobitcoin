import { url } from 'src/constants';
import Card from '../card';
import Post from './post';
import css from './posts.module.scss';

function Posts() {
    const list = [
        {
            id: 1,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?',
            url: url.article
        },
        {
            id: 2,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?',
            url: url.article
        },
        {
            id: 3,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?',
            url: url.article
        },
        {
            id: 4,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?',
            url: url.article
        }
    ]

    const renderList = () => list.map(rec => <Post key={rec.id} item={rec}></Post>)

    return (
        <Card className={css.posts}>
            <h2>Bài Viết Mới</h2>
            {renderList()}
        </Card>
    )
}

export default Posts