import { useEffect, useRef, useState } from 'react';
import css from './modal.module.scss';
import PropTypes from 'prop-types';
import Card from '../card';

function Modal(props) {
    const {
        show,
        setShow,
        header,
        isShowHeader,
        children,
        footer,
        isShowFooter
    } = props;
    const [showInner, setShowInner] = useState(false);

    const overElement = useRef(null);
    const modalElement = useRef(null);

    const onCloseModal = (callback) => {
        const existElement = overElement && overElement.current && modalElement && modalElement.current;
        if (existElement) {
            overElement.current.classList.add(css.overlayFadeOut)
            modalElement.current.classList.add(css.fadeOut)

            const idTimeout = setTimeout(() => {
                callback();
                clearTimeout(idTimeout);
            }, 400);
        }
    }
    const overlayClickHandle = (ev) => {
        if (ev.target !== ev.currentTarget) return;
        onCloseModal(() => {
            setShowInner(false);
            setShow(false);
        })
    }
    const renderHeader = () => isShowHeader ? { header } : '';
    const renderFooter = () => isShowFooter ? { footer } : '';
    const renderModal = () => showInner ?
        <div
            onClick={overlayClickHandle}
            ref={overElement}
            className={`${css.overlay} ${css.overlayFadeIn}`}
        >
            <div className={`${css.responsive} ${css.positionUp}`}>
                <Card
                    ref={modalElement}
                    className={`${css.modal} ${css.fadeIn}`}
                >
                    {renderHeader()}
                    {children}
                    {renderFooter()}
                </Card>
            </div>
        </div>
        :
        ''

    useEffect(() => {
        if (show) {
            setShowInner(true);
        } else {
            const callback = () => {
                setShowInner(false);
            }
            onCloseModal(callback)
        }
    }, [show])

    return <>{renderModal()}</>

}

Modal.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    header: PropTypes.node,
    isShowHeader: PropTypes.bool,
    children: PropTypes.node,
    footer: PropTypes.node,
    isShowFooter: PropTypes.bool
};

Modal.defaultProps = {
    isShowHeader: true,
    isShowFooter: true
};

export default Modal