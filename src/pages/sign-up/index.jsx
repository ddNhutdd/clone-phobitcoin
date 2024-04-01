import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { regular, sidebarDefault } from 'src/constants';
import { setShowContentSidebar, sidebarContent } from 'src/redux/slices/user-template'
import css from './sign-up.module.scss';
import Card from 'src/components/card';
import { BiSolidUser } from 'react-icons/bi';
import Input, { inputType } from 'src/components/input';
import Button, { buttonType } from 'src/components/button';
import { useForm } from 'src/hooks/use-form';
import { Captcha } from 'src/components/captcha';

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
                            Số điện thoại:
                        </label>
                        <Input
                            max={[30, 'Mật khẩu quá dài']}
                            min={[6, "Mật khẩu quá ngắn"]}
                            {...register('phone')}
                            errorMessage={errors['phone']}
                        />
                    </div>
                    <div className={`${css.signUp__input} ${css.law}`}>
                        <label>
                            Điều Khoản:
                        </label>
                        <Card className={css.signUp__law}>
                            <div>
                                <span className={css.signUp__firstLine}></span>
                                - Nghiêm cấm hành vi mua bán không chính chủ, rửa tiền, chúng tôi có thể giữ tiền để phối hợp với các cơ quan chức năng nếu phát hiện dấu hiệu khả nghi.
                            </div>
                            <div>
                                <span className={css.signUp__firstLine}></span>
                                - Vui lòng chuyển đúng Coin, đúng mạng lưới với giao dịch bán và đúng STK với giao dịch mua. Nếu quý khách chuyển sai sẽ dẫn đến mất tài sản và Phố Bitcoin không chịu trách nhiệm.
                            </div>
                            <div>
                                <span className={css.signUp__firstLine}></span>
                                - Phố Bitcoin chỉ là bên mua bán tiền điện tử và không liên quan tới bất kì dự án nào.
                            </div>
                            <div>
                                <span className={css.signUp__firstLine}></span>
                                - Khách hàng mua bán đồng ý cam kết không sử dụng Coin làm phương tiện thanh toán tại VN. Điều khoản chi tiết đọc thêm tại https://phobitcoin.com/policy
                            </div>
                        </Card>
                    </div>
                    <div className={css.signUp__input}>
                        <label> </label>
                        <div className='ml-a w-md-100 ml-sm-0'>
                            <Captcha></Captcha>
                            <Input
                                {...register('captcha')}
                                require={[true, 'Captcha không được bỏ trống']}
                                max={[6, 'Captcha quá dài']}
                                min={[6, "Captcha quá ngắn"]}
                                className='mt-2'
                                placeholder={`Nhập captcha`}
                                errorMessage={errors['captcha']}
                            />
                        </div>

                    </div>
                </div>
                <div className={css.signUp__footer}>
                    <Button type={buttonType.danger}>
                        Đăng Kí
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default SignUp