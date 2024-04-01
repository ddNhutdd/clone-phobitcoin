import PropTypes from 'prop-types';
import css from './input-number.module.scss';

function InputNumber(props) {
    const {
        onChange,
        id,
        errorMessage,
        text,
        disabled
    } = props;
    const listKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

    const handleChange = (event) => {
        formatInput(event);

        //validate onchange
        onChange(event);
    }
    const formatInput = (event) => {
        let { value } = event.target;
        if (value === '') {
            event.target.value = value;
            return;
        }

        const newValue = value.replaceAll(",", "");

        if (check(newValue)) {
            if (parseFloat(newValue) === 0) {
                event.target.value = value;
                return;
            }
            event.target.value = parseFloat(newValue).toLocaleString('en-US', { maximumFractionDigits: 21 });
            return;
        } else {
            event.target.value = changeValue(value);
        }
    }
    const check = (str) => {
        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (!checkChar(listKeys, char)) return false;

            if (char === ".") {
                if (!checkChar(listKeys.slice(0, listKeys.length - 1), str[i - 1])) return false;
                if (!checkChar(listKeys.slice(0, listKeys.length - 1), str[i + 1])) return false;
            }
        }

        return true;
    }
    const checkChar = (listKeys, key) => {
        for (const item of listKeys) {
            if (item === key) {
                return true;
            }
        }
        return false;
    }
    const changeValue = (str) => {
        const lastChar = str.slice(-1);
        if (!checkChar(listKeys, lastChar)) return str.slice(0, str.length - 1)

        if (lastChar === '.') {
            const testChar = str.slice(-2).slice(0, 1);
            const testResult = checkChar(listKeys.slice(0, listKeys.length - 1), testChar);
            if (!testResult) {
                return str.slice(0, str.length - 1)
            } else {
                return str
            }
        }
        return str
    }
    const renderClassDisabled = () => disabled ? css.disabled : '';

    return (
        <div className={css.inputNumber}>
            <div className={`${css.inputNumber__container} ${renderClassDisabled()}`}>
                <input
                    id={id}
                    type="text"
                    onChange={handleChange}
                    disabled={disabled}
                />
                <div className={css.inputNumber__text}>
                    {text}
                </div>
            </div>
            <div className={css.inputNumberError}>
                {errorMessage}
            </div>
        </div>
    );
}

InputNumber.propTypes = {
    onChange: PropTypes.func,
    id: PropTypes.string,
    errorMessage: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool
};

export default InputNumber