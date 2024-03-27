import css from './button.module.scss';
import PropTypes from 'prop-types';

export const buttonType = {
    success: 'success',
    danger: 'danger',
    secondary: 'secondary'
}

function Button(props) {
    const {
        type,
        children,
        className
    } = props;


    const renderType = () => {
        switch (type) {
            case buttonType.success:
                return css.success
            case buttonType.danger:
                return css.danger
            case buttonType.secondary:
                return css.secondary
            default:
                return css.secondary
        }
    }

    return (
        <button
            className={`${css.button} ${renderType()} ${className}`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(buttonType)),
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

export default Button