import css from './button.module.scss';
import PropTypes from 'prop-types';

export const buttonType = {
    success: 'success',
    danger: 'danger',
    secondary: 'secondary',
    primary: 'primary'
}

function Button(props) {
    const {
        type,
        children,
        className,
        onClick
    } = props;


    const renderType = () => {
        switch (type) {
            case buttonType.success:
                return css.success
            case buttonType.danger:
                return css.danger
            case buttonType.secondary:
                return css.secondary
            case buttonType.primary:
                return css.primary
            default:
                return css.secondary
        }
    }

    return (
        <button
            onClick={onClick}
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
    onClick: PropTypes.func
};

export default Button