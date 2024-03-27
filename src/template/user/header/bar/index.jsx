import Button from 'src/components/button';
import css from './bar.module.scss';
import { FaBars } from "react-icons/fa6";

function Bar() {
    return (
        <Button className={css.bar}>
            <FaBars />
        </Button>
    )
}

export default Bar