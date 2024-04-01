import PropTypes from 'prop-types';
import css from './radio-button.module.scss';

export const RadioButton = (props) => {
    const {
        name,
        id,
        children,
        checked,
        className
    } = props;
    return (
        <div className={`${css.radioButton} ${className}`}>
            <input
                type='radio'
                id={id}
                name={name}
                className='d-0'
                checked={checked}
                onChange={() => { }}
            />
            <label
                htmlFor={id}
                className={`${css.radioButton__label} `}
            >
                <div className={css.radioButton__circle}>
                    <div className={css.radioButton__dot}></div>
                </div>
                <div className={css.radioButton__text}>
                    {children}
                </div>
            </label>
        </div>

    )
}

RadioButton.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.node,
    checked: PropTypes.bool,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
}
