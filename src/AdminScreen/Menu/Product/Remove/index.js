import Navbar from "../../../Navbar";
import Header from "../../../Header";
import Footer from "../../../Footer";



const Remove = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Quản lý dự án <small>Xoá dự án đã thêm</small></h1>
                            </div>
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>Dự án</th>
                                        <th>Tình trạng</th>
                                        <th>Số lượng</th>
                                        <th>Giá tiền</th>
                                        <th>Ngày đăng</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="douban-list">
                                        <td>LandMark City</td>
                                        <td>Chưa bán</td>
                                        <td>2</td>
                                        <td>18.000.000.000 đ</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>VingGroup</td>
                                        <td>Chưa bán</td>
                                        <td>2</td>
                                        <td>18.000.000.000 đ</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>LandMark City</td>
                                        <td>Chưa bán</td>
                                        <td>2</td>
                                        <td>18.000.000.000 đ</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>LandMark City</td>
                                        <td>Chưa bán</td>
                                        <td>2</td>
                                        <td>18.000.000.000 đ</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>LandMark City</td>
                                        <td>Chưa bán</td>
                                        <td>2</td>
                                        <td>18.000.000.000 đ</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                    <tr className="douban-list">
                                        <td>LandMark City</td>
                                        <td>Chưa bán</td>
                                        <td>2</td>
                                        <td>18.000.000.000 đ</td>
                                        <td>2022-8-19 12:00</td>
                                        <td><button className="remove">Xoá</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Remove;