import css from './button.module.scss';
import PropTypes from 'prop-types';

export const buttonType = {
    success: 'success',
    danger: 'danger',
    secondary: 'secondary',
    primary: 'primary',
    oneTime: 'oneTime'
}
export const buttonHtmlType = {
    button: 'button',
    submit: 'submit'
}

function Button(props) {
    const {
        type,
        children,
        className,
        onClick,
        htmlTyle
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
            case buttonType.oneTime:
                return css.oneTime
            default:
                return css.secondary
        }
    }

    return (
        <button
            type={htmlTyle}
            onClick={onClick}
            className={`${css.button} ${renderType()} ${className}`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(buttonType)),
    htmlTyle: PropTypes.oneOf(Object.values(buttonHtmlType)),
    children: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    onClick: PropTypes.func
};

Button.defaultProps = {
    htmlTyle: buttonHtmlType.submit
};

export default Button