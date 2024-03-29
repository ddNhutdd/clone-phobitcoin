import Button, { buttonType } from 'src/components/button';
import css from './search.module.scss';
import Input from 'src/components/input';
import { useNavigate } from 'react-router-dom';
import { url } from 'src/constants';

function Search() {
    const navigate = useNavigate();
    const redirectPageSearch = () => navigate(url.search)

    return (
        <form className={css.search}>
            <Input
                placeholder={`Tìm bài viết, mã số GD...`}
            ></Input>
            <Button
                onClick={redirectPageSearch}
                className={css.search__button}
                type={buttonType.secondary}>
                Tìm Kiếm
            </Button>
        </form>
    )
}

export default Search