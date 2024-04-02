import { NavLink } from 'react-router-dom';
import css from './post.module.scss';
import PropTypes from 'prop-types';

function Post(props) {
    const { item } = props;
    return (
        <div className={css.post}>
            <div className={css.post__img}>
                <NavLink to={item.url}>
                    <img src={item.img} alt={item.header} />
                </NavLink>
            </div>
            <div className={css.post__header}>
                <NavLink to={item.url}>
                    {item.header}
                </NavLink>
            </div>
            <div className={css.post__line}></div>
        </div>
    )
}

Post.propTypes = {
    item: PropTypes.object,
}

export default Post