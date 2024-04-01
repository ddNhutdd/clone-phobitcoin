import PropTypes from 'prop-types';
import css from './radio-button.module.scss';

export const RadioButton = (props) => {
    const {
        name,
        id,
        children,
        checked
    } = props;
    return (
        <div className={css.radioButton}>
            <input
                type='radio'
                id={id}
                name={name}
                className='d-0'
                checked={checked}
            />
            <label
                htmlFor={id}
                className={css.radioButton__label}
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
    id: PropTypes.id,
    children: PropTypes.node,
    checked: PropTypes.bool
}
