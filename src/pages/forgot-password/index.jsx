import Card from 'src/components/card';
import css from './forgot-password.module.scss';
import { BiSolidUser } from 'react-icons/bi';
import { useForm } from 'src/hooks/use-form';
import Input from 'src/components/input';
import { regular, sidebarDefault } from 'src/constants';
import Button, { buttonType } from 'src/components/button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template';

function ForgotPassword() {
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
        <Card className={css.forgotPassword}>
            <div className={css.forgotPassword__header}>
                <BiSolidUser />
                Quên mật khẩu
            </div>
            <form onSubmit={submitHandle}>
                <div className={css.forgotPassword__main}>
                    <div className={css.forgotPassword__input}>
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
                </div>
                <div className={css.forgotPassword__footer}>
                    <Button type={buttonType.danger}>
                        Gửi Yêu Cầu
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default ForgotPassword