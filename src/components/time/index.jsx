import { IoIosCalendar } from 'react-icons/io';
import css from './time.module.scss';
import PropTypes from 'prop-types';

function Time(props) {
    const { time } = props;
    return (
        <div className={css.time}>
            <IoIosCalendar />
            {time}
        </div>
    )
}

Time.propTypes = {
    time: PropTypes.node
};

export default Time