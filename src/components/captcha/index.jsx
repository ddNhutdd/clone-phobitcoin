import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import css from './captcha.module.scss'

export const Captcha = () => {
    useEffect(() => {
        loadCaptchaEnginge(6, 'white', 'black');
    }, [])
    return (
        <div className={css.captcha}>
            <LoadCanvasTemplate reloadText=" " />
        </div>
    )
}