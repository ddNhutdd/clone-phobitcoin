import css from './card.module.scss';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Card = forwardRef((props, ref) => {
    const { children, className } = props;
    return (
        <div ref={ref} className={`${css.card} ${className}`}>
            {children}
        </div>
    )
})
Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
}

export default Card