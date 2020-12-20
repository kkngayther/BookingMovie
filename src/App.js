import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import DangKy from './pages/DangKy/DangKy';
import DangNhap from './pages/DangNhap/DangNhap';
import TrangChu from './pages/TrangChu/TrangChu';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/trangchu" component={TrangChu} />
      <Route path="/chitietphim" component={ChiTietPhim} />
      <Route path="/dangky" component={DangKy} />
      <Route path="/dangnhap" component={DangNhap} />
    </BrowserRouter>
  );
}

export default App;
