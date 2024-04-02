import Time from 'src/components/time';
import css from './article.module.scss';
import ListLink from './list-link';
import Blog from './blog';
import useMediaQuery from 'src/hooks/use-media';
import { useEffect } from 'react';
import { mediaBreakPoint, sidebarDefault } from 'src/constants';
import { useDispatch } from 'react-redux';
import { setShowContentSidebar } from 'src/redux/slices/user-template';

function Article() {
    const media = useMediaQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        const isEqualSmallTablet = media === mediaBreakPoint.width_576 || media === mediaBreakPoint.width_768;
        if (isEqualSmallTablet) {
            dispatch(setShowContentSidebar({}));
        } else {
            dispatch(setShowContentSidebar(sidebarDefault));
        }
    }, [media])
    return (
        <div className={css.article}>
            <div className={css.article__header}>
                Lưu trữ Bitcoin, Tiền Điện Tử ở đâu ?
            </div>
            <div className={css.article__time}>
                <Time time={`03-06-2023 | 14:28`} />
            </div>
            <div className={css.article__listLink}>
                <ListLink />
            </div>
            <div className={css.article__content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda perspiciatis at voluptate, voluptatem dolorum vitae nam facilis ad architecto. Perspiciatis ipsum quis, nostrum laborum fuga beatae similique facilis id itaque eveniet ab maxime debitis natus ea accusantium nobis facere quam dolor illum harum! Iure corporis, placeat reprehenderit, similique, in enim animi consequuntur odit debitis ducimus sed nemo et eius. Dolorum qui omnis culpa impedit officiis nulla ab eos et, maiores excepturi soluta consectetur ea laborum maxime enim doloribus veniam numquam reprehenderit. Voluptas a asperiores id sapiente. Velit aliquam debitis dignissimos commodi ipsam ipsum beatae maxime? Fugit, odit repellat corporis aperiam exercitationem similique corrupti tempora voluptates ex. Eius nesciunt, numquam incidunt inventore modi error quia fugiat quasi corporis aperiam libero velit dolorum officiis magni beatae cumque praesentium vel harum eligendi voluptate nostrum voluptas? Modi, blanditiis suscipit, minima assumenda impedit recusandae minus hic sunt optio, aut esse quis quod accusantium perspiciatis fuga sed quas. Ipsam aspernatur repellendus necessitatibus eum dicta neque itaque, architecto accusantium vitae quidem quae dolores soluta maxime quaerat aliquid reiciendis velit nobis? Rem soluta suscipit animi rerum! Harum corrupti natus eveniet impedit ad quo quia alias laboriosam, soluta eos assumenda dolores. Placeat, itaque eum iusto ipsum deserunt maxime.
            </div>
            <div className={css.article__blog}>
                <Blog />
            </div>
        </div>
    )
}

export default Article