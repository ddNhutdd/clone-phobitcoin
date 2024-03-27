import Button, { buttonType } from 'src/components/button';
import css from './search.module.scss';
import Input from 'src/components/input';

function Search() {
    return (
        <form className={css.search}>
            <Input
                placeholder={`Tìm bài viết, mã số GD...`}
            ></Input>
            <Button
                className={css.search__button}
                type={buttonType.secondary}>
                Tìm Kiếm
            </Button>
        </form>
    )
}

export default Search