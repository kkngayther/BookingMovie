import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getDataPhimAction } from '../../redux/actions/QuanLyPhimActions'

export default function TrangChu(props) {
    // useEffect la hook thay the cho lifrcycle
    useEffect(() => {
        // chay 1 lan duy nhat khi giao dien render
        dispatch(getDataPhimAction()); // vua vao trang se load danh sach phim
    }, []);

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>

            </div>
        })
    }

    // useSelector la hook reactredux cung cap de lay state tu store
    const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim);
    // useDispatch la hook thay the cho props.dispatch khi dung redux connect
    const dispatch = useDispatch();
    console.log(mangPhim);

    const loadDaTaPhim = async () => {

        dispatch(getDataPhimAction());
    }
    return (
        <div>
            <button onClick={() => {
                loadDaTaPhim();
            }}>Load danh sach phim</button>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         mangPhim: state.QuanLyPhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps)(TrangChu);