import { forwardRef } from 'react';
import css from "./input.module.scss";
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
    const { placeholder } = props;
    return (
        <div
            className={css.input}
        >
            <input placeholder={placeholder} href={ref} />
        </div>
    )
})

Input.propTypes = {
    placeholder: PropTypes.string,
}


export default Input