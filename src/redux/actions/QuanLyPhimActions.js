import { GET_DATA_PHIM } from "../const/QuanLyPgimConst";
import Axios from 'axios'
import { DOMAIN } from "../../util/setting";

export const getDataPhimAction = () => {
    return async (dispatch) => {
        const result = await Axios({
            url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
            method: 'GET'
        });


        dispatch ({
            type: GET_DATA_PHIM,
            dataPhim: result.data
        })
    }
}