import Axios from 'axios'
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/setting'

export const dangNhapAction = (nguoiDung) => {
    return async dispatch => {
        try {
            const result = await Axios({
                url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
                method: 'POST',
                data: nguoiDung
            });
            // Dang nhap thanh cong
            console.log(result.data);
            // Lay token luu vao storage
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
        }
        catch (err) {
            console.log(err.response.data)
        }

        // const promise = Axios({
        //     url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
        //     method: 'POST',
        //     data: nguoiDung
        // }).then (result => {
        //     console.log(result.data)
        // }).catch(err => {
        //     console.log(err.response.data)
        // })

    }
}