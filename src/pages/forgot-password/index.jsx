import Card from 'src/components/card';
import css from './forgot-password.module.scss';
import { BiSolidUser } from 'react-icons/bi';
import { useForm } from 'src/hooks/use-form';
import Input from 'src/components/input';
import { regular } from 'src/constants';
import Button, { buttonType } from 'src/components/button';

function ForgotPassword() {
    const formSubmit = (values) => console.log(values);
    const [, errors, submitHandle, register] = useForm(formSubmit);

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
                        Đăng Nhập
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default ForgotPassword