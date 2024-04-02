import { axiosWithVietQr, templateId } from "./config.services";

export const generateQR = () => {
    try {
        return axiosWithVietQr.post(`generate`,
            {
            accountNo: "113366668888",
            accountName: "QUY VAC XIN PHONG CHONG COVID",
            acqId: "970415",
            addInfo: "Ung Ho Quy Vac Xin",
            amount: "79000",
            template: templateId
        })
    } catch (error) {
        console.log(error);
    }
}