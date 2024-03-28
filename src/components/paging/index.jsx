import Button from '../button';
import css from './paging.module.scss';
import PropTypes from 'prop-types';

function Paging(props) {
    const { page, totalPage, setPage, onChange } = props;

    const preClickHandle = (ev) => {
        const newPage = page - 1;
        if (newPage <= 0) return;

        hideButtonPrev(newPage);
        setPage(newPage);
        onChange(newPage, ev)
    }

    const nextClickHandle = (ev) => {
        const newPage = page + 1
        if (newPage > totalPage) return;

        setPage(newPage);
        onChange(newPage, ev)
    }
    const hideButtonPrev = () => page === 1 ? 'invisible' : '';
    const hideButtonNext = () => page === totalPage ? 'invisible' : '';

    return (
        <div className={css.paging}>
            <Button onClick={preClickHandle} className={`${css.paging__button} ${hideButtonPrev()}`}>Trang trước</Button>
            <Button onClick={nextClickHandle} className={`${css.paging__button} ${hideButtonNext()}`}>Trang kế</Button>
        </div>
    )
}

Paging.propTypes = {
    page: PropTypes.number,
    totalPage: PropTypes.number,
    setPage: PropTypes.func,
    onChange: PropTypes.func
};

export default Paging