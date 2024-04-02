import { NavLink } from 'react-router-dom';
import css from './blog.module.scss';

function Blog() {
    return (
        <div className={css.blog}>
            <div className={css.blog__title}>
                Có thể bạn quan tâm:
            </div>
            <div className={css.blog__list}>
                <div className={css.blog__item}>
                    <NavLink>
                        <img src="https://phobitcoin.com/blog/wp-content/uploads/2020/05/image-20-260x170.png?v=1588585952" alt="ar" />
                    </NavLink>
                    <NavLink>
                        Tại sao Tether lại được in nhiều tiền như vậy ?
                    </NavLink>
                </div>
                <div className={css.blog__item}>
                    <NavLink>
                        <img src="https://phobitcoin.com/blog/wp-content/uploads/2020/05/image-20-260x170.png?v=1588585952" alt="ar" />
                    </NavLink>
                    <NavLink>
                        Tại sao Tether lại được in nhiều tiền như vậy ?
                    </NavLink>
                </div>
                <div className={css.blog__item}>
                    <NavLink>
                        <img src="https://phobitcoin.com/blog/wp-content/uploads/2020/05/image-20-260x170.png?v=1588585952" alt="ar" />
                    </NavLink>
                    <NavLink>
                        Tại sao Tether lại được in nhiều tiền như vậy ?
                    </NavLink>
                </div>
                <div className={css.blog__item}>
                    <NavLink>
                        <img src="https://phobitcoin.com/blog/wp-content/uploads/2020/05/image-20-260x170.png?v=1588585952" alt="ar" />
                    </NavLink>
                    <NavLink>
                        Tại sao Tether lại được in nhiều tiền như vậy ?
                    </NavLink>
                </div>
                <div className={css.blog__item}>
                    <NavLink>
                        <img src="https://phobitcoin.com/blog/wp-content/uploads/2020/05/image-20-260x170.png?v=1588585952" alt="ar" />
                    </NavLink>
                    <NavLink>
                        Tại sao Tether lại được in nhiều tiền như vậy ?
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Blog