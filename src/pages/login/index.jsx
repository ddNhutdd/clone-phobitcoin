import { useEffect } from 'react';
import css from './login.module.scss';
import { useDispatch } from 'react-redux';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template';
import Card from 'src/components/card';
import { NavLink } from 'react-router-dom';
import Button, { buttonType } from 'src/components/button';
import { BiSolidUser } from "react-icons/bi";
import Input, { inputType } from 'src/components/input';
import { useForm } from 'src/hooks/use-form';
import { regular, sidebarDefault, url } from 'src/constants';
import { Captcha } from 'src/components/captcha';

function Login() {
    const dispatch = useDispatch();
    const formSubmit = (values) => console.log(values);
    const [, errors, submitHandle, register] = useForm(formSubmit);

    useEffect(() => {
        dispatch(setShowContentSidebar({
            [sidebarContent.chains]: true,
        }))

        return () => {
            dispatch(setShowContentSidebar(sidebarDefault))
        }
    }, [])

    return (
        <Card className={css.login}>
            <div className={css.login__header}>
                <BiSolidUser />
                Đăng Nhập
            </div>
            <form onSubmit={submitHandle}>
                <div className={css.login__main}>
                    <div className={css.login__input}>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <Input
                            require={[true, 'Không được bỏ trống']}
                            regular={[regular.email, 'Email không đúng định dạng']}
                            {...register('email')}
                            errorMessage={errors['email']}
                        />
                    </div>
                    <div className={css.login__input}>
                        <label htmlFor="password">
                            Mật khẩu:
                        </label>
                        <Input
                            type={inputType.password}
                            max={[30, 'Mật khẩu quá dài']}
                            min={[6, "Mật khẩu quá ngắn"]}
                            {...register('password')}
                            require={[true, 'Không được bỏ trống']}
                            errorMessage={errors['password']}
                        />
                    </div>
                    <div className={css.login__input}>
                        <label htmlFor="password">

                        </label>
                        <div className='ml-a ml-sm-0'>
                            <Captcha></Captcha>
                            <Input
                                {...register('captcha')}
                                require={[true, 'Không được bỏ trống']}
                                max={[6, 'Captcha quá dài']}
                                min={[6, "Captcha quá ngắn"]}
                                className='mt-2'
                                placeholder={`Nhập captcha`}
                                errorMessage={errors['captcha']}
                            />
                        </div>

                    </div>
                </div>
                <div className={css.login__footer}>
                    <NavLink to={url.forgotPassword} className={css.login__footer__forgot}>
                        Quên mật khẩu
                    </NavLink>
                    {" "}
                    -
                    {" "}
                    <NavLink to={url.signUp} className={css.login__footer__login}>
                        Đăng kí tài khoản
                    </NavLink>
                    <Button type={buttonType.danger}>
                        Đăng Nhập
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login