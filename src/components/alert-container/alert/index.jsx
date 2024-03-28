import { alertType } from 'src/contexts/alert-context';
import css from './alert.module.scss'
import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types';

function Alert(props) {
    const { close, type, content } = props;

    const renderType = () => {
        switch (type) {
            case alertType.info:
                return css.info;
            case alertType.error:
                return css.error
            default:
                break;
        }
    }

    return (
        <div className={`${css.alert} ${renderType()}`}>
            {content}
            <div className={css.alert__close} onClick={close}><IoClose /></div>
        </div>
    )
}

Alert.propTypes = {
    close: PropTypes.func,
    type: PropTypes.oneOf(Object.values(alertType)),
    content: PropTypes.node
}

export default Alert