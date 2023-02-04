import { Link } from 'react-router-dom';
import '../Header/header.css';

const Header = () => {
  return (
    <div className='span3'>
      <ul className='nav nav-list'>
        <li className='nav-header'>
          <i className='bx bxs-home' /> Trang chủ
        </li>
        <li className='active'>
          <Link to='/admin'><i class='bx bx-right-arrow-alt'></i>Thông tin trang chủ</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-building' /> Quản lý sản phẩm
        </li>
        <li>
          <Link to='/admin/products'><i class='bx bx-right-arrow-alt'></i>Quản lý sản phẩm</Link>
        </li>
        <li>
          <Link to='/admin/addproduct'><i class='bx bx-right-arrow-alt'></i>Thêm sản phẩm</Link>
        </li>
        <li>
          <Link to='/admin/editproduct'><i class='bx bx-right-arrow-alt'></i>Sửa sản phẩm</Link>
        </li>
        <li>
          <Link to='/admin/deleteproduct'><i class='bx bx-right-arrow-alt'></i>Xoá sản phẩm</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-user-circle' /> Quản lý user
        </li>
        <li>
          <Link to='/admin/adduser'><i class='bx bx-right-arrow-alt'></i>Thêm tài khoản user</Link>
        </li>
        <li>
          <Link to='/admin/removeuser'><i class='bx bx-right-arrow-alt'></i>Xoá tài khoản user</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-bar-chart-alt-2' /> Quản lý doanh thu
        </li>
        <li>
          <Link href=''><i class='bx bx-right-arrow-alt'></i>Thống kê doanh thu</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-food-menu' /> Quản lý đơn hàng
        </li>
        <li>
          <Link to='/admin/addshipment'><i class='bx bx-right-arrow-alt'></i>Thêm người dùng</Link>
        </li>
        <li>
          <Link to='/admin/query'><i class='bx bx-right-arrow-alt'></i>truy vấn người dùng</Link>
        </li>
        <li className='nav-header'>
          <i className='bx bxs-help-circle' /> Hỗ trợ khách hàng
        </li>
        <li>
          <Link to='/admin/help'><i class='bx bx-right-arrow-alt'></i>Đánh giá và yêu cầu của khách hàng</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
