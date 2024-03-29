import { forwardRef } from 'react';
import css from "./input.module.scss";
import PropTypes from 'prop-types';

export const inputType = {
    text: 'text',
    password: 'password'
}

const Input = forwardRef((props, ref) => {
    const {
        placeholder,
        id,
        type,
        require,
        max,
        min,
        regular,
        onChange,
        errorMessage,
        asame
    } = props;

    const renderClassError = () => errorMessage ? css.err : '';

    return (
        <div className='flex flex-col w-100'>
            <div
                className={`${css.input} ${renderClassError()}`}
            >
                <input
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    href={ref}
                    type={type}
                    data-require={JSON.stringify(require)}
                    data-max={JSON.stringify(max)}
                    data-min={JSON.stringify(min)}
                    data-regular={JSON.stringify(regular)}
                    data-asame={JSON.stringify(asame)}
                />

            </div>
            {
                errorMessage && <span className={css.input__error}>
                    {errorMessage}
                </span>
            }

        </div>

    )
})

Input.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(Object.values(inputType)),
    require: PropTypes.array,
    max: PropTypes.array,
    min: PropTypes.array,
    regular: PropTypes.array,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    asame: PropTypes.array
}


export default Input