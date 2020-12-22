import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';

const DangNhap = () => {
    // useDispatch la hook do redux cung cap tuong tu props.dispatch
    // useState la thu vien thay the this.state trong RE class component
    const dispatch = useDispatch();

    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: ''
    }) // useState nhan gia tri la state mac dinh default
    // ung voi classComponent state = {}
    console.log(state)
    const handleChangeInput = (event) => {
        const {name, value} = event.target;
        console.log(name, value);

        setState({...state, [name]:value});

        // Goi API de xac thuc dang nhap
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dangNhapAction(state));
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3 className="display-4">Đăng nhập</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={handleChangeInput}/>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={handleChangeInput}/>
            </div>
            <div className="form-group">
                <button className="btn btn-success">Đăng nhập</button>
            </div>
        </form>
    );
};

export default DangNhap;