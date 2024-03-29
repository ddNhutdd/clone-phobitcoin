import Card from 'src/components/card';
import css from './change-password.module.scss';
import Button, { buttonHtmlType, buttonType } from 'src/components/button';
import Input, { inputType } from 'src/components/input';
import { useForm } from 'src/hooks/use-form';

function ChangePassword() {
    const formSubmit = (values) => console.log(values);
    const [, errors, submitHandle, register] = useForm(formSubmit);

    return (
        <Card className={css.changePassword}>
            <div className={css.changePassword__header}>
                Đổi mật khẩu
            </div>
            <form onSubmit={submitHandle} className={css.changePassword__body}>
                <div className={css.changePassword__row}>
                    <div className={css.changePassword__label}>Mật khẩu mới: </div>
                    <div>
                        <Input
                            require={[true, 'Mật khẩu không được bỏ trống']}
                            max={[20, "Mật khẩu quá dài"]}
                            min={[6, "Mật khẩu quá ngắn"]}
                            type={inputType.password}
                            {...register('password')}
                            errorMessage={errors['password']}
                        />
                    </div>
                </div>
                <div className={css.changePassword__row}>
                    <div className={css.changePassword__label}>Nhập lại mật khẩu: </div>
                    <div>
                        <Input
                            require={[true, 'Mật khẩu không được bỏ trống']}
                            asame={['password', 'Mật khẩu không trùng khớp']}
                            type={inputType.password}
                            {...register('confirmPassword')}
                            errorMessage={errors['confirmPassword']}
                        />
                    </div>
                </div>
                <div className={css.changePassword__row}>
                    <div className={css.changePassword__label}></div>
                    <div className='flex items-center gap-1'>
                        <Button type={buttonType.primary}>
                            Cập nhật
                        </Button>
                        <Button htmlTyle={buttonHtmlType.button} type={buttonType.secondary}>
                            Nhập lại
                        </Button>
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default ChangePassword