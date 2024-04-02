import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mediaBreakPoint, sidebarDefault } from "src/constants";
import { setShowContentSidebar, sidebarContent } from "src/redux/slices/user-template";
import css from './contact.module.scss';
import { NavLink } from "react-router-dom";
import useMediaQuery from "src/hooks/use-media";

function Contact() {
    const dispatch = useDispatch();
    const media = useMediaQuery();
    useEffect(() => {
        return () => {
            dispatch(setShowContentSidebar(sidebarDefault))
        }
    }, []);
    useEffect(() => {
        if (media === mediaBreakPoint.width_576 || media === mediaBreakPoint.width_768) {
            dispatch(setShowContentSidebar({}))
        } else {
            dispatch(setShowContentSidebar({
                [sidebarContent.chains]: true,
            }))
        }
    }, [media])

    return (
        <div className={css.contact}>
            <div className={css.contact__header}>Liên Hệ</div>
            <div className={css.contact__panel}>
                <div>
                    Bạn có thể liên hệ với
                    <span className={css.contact__phobitcoin}>
                        Phố Bitcoin
                    </span>
                    bằng các cách bên dưới:
                </div>
                <ul>
                    <li>Chat trực tiếp với support tại</li>
                    <img src="https://phobitcoin.com/public/frontend//images/chatfb.png" alt="dktech" />
                    <li>
                        <div>
                            Liên hệ Email:
                            <NavLink>phobitcoin.com@gmail.com</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact