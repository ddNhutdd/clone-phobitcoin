import PropTypes from 'prop-types';
import css from './radio-button.module.scss';

export const RadioButton = (props) => {
    const {
        name,
        id,
        children
    } = props;
    return (
        <div className={css.radioButton}>
            <input
                type='radio'
                id={id}
                name={name}
            />
            <label
                htmlFor={id}
            >
                <div className={css.radioButton__circle}>

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
    children: PropTypes.node
}
