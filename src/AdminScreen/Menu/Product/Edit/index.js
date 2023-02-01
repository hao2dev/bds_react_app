
import Navbar from "../../../Navbar";
import Header from "../../../Header";
import Footer from "../../../Footer";



const Edit = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div>
                        <div className="span9">
                            <div className="row-fluid">
                                <div className="page-header">
                                    <h1>Quản lý dự án <small /></h1>
                                </div>
                                <table className="table table-striped table-bordered table-condensed">
                                    <thead>
                                        <tr>
                                            <th>Dự án</th>
                                            <th>Tình trạng</th>
                                            <th>Số lượng</th>
                                            <th>Vị trí</th>
                                            <th>Giá bán</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="douban-list">
                                            <td>LandMark City</td>
                                            <td>Chưa bán</td>
                                            <td>2</td>
                                            <td>Dự án phía Bắc</td>
                                            <td>18.000.000.000 đ</td>
                                            <td><button className="edit">Sửa</button></td>
                                        </tr>
                                        <tr className="douban-list">
                                            <td>VingGroup</td>
                                            <td>Chưa bán</td>
                                            <td>2</td>
                                            <td>Dự án phía Nam</td>
                                            <td>18.000.000.000 đ</td>
                                            <td><button className="edit">Sửa</button></td>
                                        </tr>
                                        <tr className="douban-list">
                                            <td>LandMark City</td>
                                            <td>Chưa bán</td>
                                            <td>2</td>
                                            <td>Dự án phía Nam</td>
                                            <td>18.000.000.000 đ</td>
                                            <td><button className="edit">Sửa</button></td>
                                        </tr>
                                        <tr className="douban-list">
                                            <td>LandMark City</td>
                                            <td>Chưa bán</td>
                                            <td>2</td>
                                            <td>Dự án phía Bắc</td>
                                            <td>18.000.000.000 đ</td>
                                            <td><button className="edit">Sửa</button></td>
                                        </tr>
                                        <tr className="douban-list">
                                            <td>LandMark City</td>
                                            <td>Chưa bán</td>
                                            <td>2</td>
                                            <td>Dự án phía Nam</td>
                                            <td>18.000.000.000 đ</td>
                                            <td><button className="edit">Sửa</button></td>
                                        </tr>
                                        <tr className="douban-list">
                                            <td>LandMark City</td>
                                            <td>Chưa bán</td>
                                            <td>2</td>
                                            <td>Dự án phía Bắc</td>
                                            <td>18.000.000.000 đ</td>
                                            <td><button className="edit">Sửa</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="span9">
                            <div className="row-fluid">
                                <div className="page-header">
                                    <h1>Sửa sản phẩm<small /></h1>
                                </div>
                                <form className="form-horizontal">
                                    <fieldset>
                                        <div className="control-group">
                                            <label className="control-label">Tên sản phẩm</label>
                                            <div className="controls">
                                                <input type="text" className="input-xlarge" id />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label">Tình trạng</label>
                                            <div className="controls">
                                                <input type="text" className="input-xlarge" id />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label">Số lượng</label>
                                            <div className="controls">
                                                <input type="text" className="input-xlarge" id="book_author" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label">Vị trí</label>
                                            <div className="controls">
                                                <input type="text" className="input-xlarge" id="book_press" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label">Giá bán</label>
                                            <div className="controls">
                                                <input type="text" className="input-xlarge" id="book_collections" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label">Tệp đính kèm</label>
                                            <div className="controls">
                                                <input type="file" className="input-xlarge" id="book_image" />
                                            </div>
                                        </div>
                                        <div className="form-actions">
                                            <input type="submit" className="btn btn-success" defaultValue="Sửa" />
                                            <input type="reset" className="btn" defaultValue="Trở lại" />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Edit;