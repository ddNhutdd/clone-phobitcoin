import Articles from 'src/components/articles'
import css from './knowledge.module.scss'

function Knowledge() {
    return (
        <div className={css.knowledge}>
            <div className='--header-component'>Kiến thức bitcoin, crypto</div>
            <Articles />
        </div>
    )
}

export default Knowledge