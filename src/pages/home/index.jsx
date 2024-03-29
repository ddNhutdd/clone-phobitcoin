import { useEffect } from "react";
import { alertType } from "src/contexts/alert-context";
import useAlert from "src/hooks/alert-hook";
import Articles from "src/components/articles";

function Home() {
    const alert = useAlert();

    useEffect(() => {
        alert.callAlert(alertType.info, 'Phố Bitcoin chỉ là bên mua bán tiền điện tử, không liên quan bất ki dự án nào. Nghiêm cấm hành vi sử dụng tiền không chính chủ không rõ nguồn gốc. Vui lòng đọc kỹ điều khoản khi giao dịch. https://phobitcoin.com/policy');

        return () => {
            alert.removeAllAlert();
        }
    }, [])

    return (
        <Articles />
    )
}

export default Home