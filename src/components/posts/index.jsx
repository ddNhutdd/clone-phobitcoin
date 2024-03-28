import Card from '../card';
import Post from './post';
import css from './posts.module.scss';

function Posts() {
    const list = [
        {
            id: 1,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?'
        },
        {
            id: 2,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?'
        },
        {
            id: 3,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?'
        },
        {
            id: 4,
            img: 'https://phobitcoin.com/blog/wp-content/uploads/2023/06/image-4-260x170.png?v=1685777450',
            header: 'Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?'
        }
    ]

    const renderList = () => list.map(item => <Post key={item.id} item={item}></Post>)

    return (
        <Card className={css.posts}>
            <h2>Bài Viết Mới</h2>
            {renderList()}
        </Card>
    )
}

export default Posts