import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { regular, sidebarDefault, url } from 'src/constants';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template'
import css from './sign-up.module.scss';
import Card from 'src/components/card';
import { BiSolidUser } from 'react-icons/bi';
import Input, { inputType } from 'src/components/input';
import { NavLink } from 'react-router-dom';
import Button, { buttonType } from 'src/components/button';
import { useForm } from 'src/hooks/use-form';

function SignUp() {
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
        <Card className={css.signUp}>
            <div className={css.signUp__header}>
                <BiSolidUser />
                Đăng Kí
            </div>
            <form onSubmit={submitHandle}>
                <div className={css.signUp__main}>
                    <div className={css.signUp__input}>
                        <label htmlFor="name">
                            Name:
                        </label>
                        <Input
                            require={[true, 'Tên không được bỏ trống']}
                            {...register('name')}
                            errorMessage={errors['name']}
                        />
                    </div>
                    <div className={css.signUp__input}>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <Input
                            require={[true, 'Email không được bỏ trống']}
                            regular={[regular.email, "Email không đúng định dạng"]}
                            {...register('email')}
                            errorMessage={errors['email']}
                        />
                    </div>
                    <div className={css.signUp__input}>
                        <label htmlFor="password">
                            Mật khẩu:
                        </label>
                        <Input
                            type={inputType.password}
                            require={[true, 'Mật khẩu không được bỏ trống']}
                            max={[30, 'Mật khẩu quá dài']}
                            min={[6, "Mật khẩu quá ngắn"]}
                            {...register('password')}
                            errorMessage={errors['password']}
                        />
                    </div>
                    <div className={css.signUp__input}>
                        <label htmlFor="passwordConfirm">
                            Nhập lại mật khẩu:
                        </label>
                        <Input
                            type={inputType.password}
                            require={[true, 'Nhập lại mật khẩu không được bỏ trống']}
                            {...register('passwordConfirm')}
                            asame={['password', "Mật khẩu không trùng khớp"]}
                            errorMessage={errors['passwordConfirm']}
                        />
                    </div>
                    <div className={css.signUp__input}>
                        <label htmlFor="phone">
                            Số điện thoại
                        </label>
                        <Input
                            max={[30, 'Mật khẩu quá dài']}
                            min={[6, "Mật khẩu quá ngắn"]}
                            {...register('phone')}
                            errorMessage={errors['phone']}
                        />
                    </div>
                </div>
                <div className={css.signUp__footer}>
                    <NavLink to={url.forgotPassword} className={css.signUp__footer__forgot}>
                        Quên mật khẩu
                    </NavLink>
                    {" "}
                    -
                    {" "}
                    <NavLink className={css.signUp__footer__signUp}>
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

export default SignUp