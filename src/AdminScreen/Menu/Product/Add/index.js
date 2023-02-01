
import Navbar from "../../../Navbar";
import Header from "../../../Header";
import Footer from "../../../Footer";



const Add = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Thêm sản phẩm<small /></h1>
                            </div>
                            <form className="form-horizontal">
                                <fieldset>
                                    <div className="control-group">
                                        <label className="control-label">Tên sản phẩm</label>
                                        <div className="controls">
                                            <input type="text" className="input-xlarge" id="book_isbn" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label">Tổng quan</label>
                                        <div className="controls">
                                            <input type="text" className="input-xlarge" id="book_name" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label">Vị trí</label>
                                        <div className="controls">
                                            <input type="text" className="input-xlarge" id="book_author" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label">Nhà phân phối</label>
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
                                        <label className="control-label">Chi tiết về sản phẩm</label>
                                        <div className="controls">
                                            <input type="file" className="input-xlarge" id="book_image" />
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <input type="submit" className="btn btn-success" defaultValue="Thêm vào" />
                                        <input type="reset" className="btn" defaultValue="Sửa" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Add;