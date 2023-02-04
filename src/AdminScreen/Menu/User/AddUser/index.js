import Footer from "../../../Footer";
import Header from "../../../Header";
import Navbar from "../../../Navbar";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../../firebase/connect";
import { createUserWithEmailAndPassword } from "firebase/auth";


import '../AddUser/adduser.css'


const AddUser = () => {

    const [formData, setFormData] = useState({
    });

    const handleChangeValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const users = await createUserWithEmailAndPassword(
                auth,
                formData.users,
                formData.passwords,
            );
        } catch (error) {
            console.log(error.message);
        }
        try {
            await addDoc(collection(db, 'accounts'), {
                ...formData,
            });
            alert('Thêm mới thành công!');
        } catch (err) {
            alert(err);
        }
    };
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row-fluid">
                    <Header />
                    <div className="span9">
                        <div className="row-fluid">
                            <div className="page-header">
                                <h1>Quản lý người dùng<br></br><small>Thêm quản trị viên</small></h1>
                            </div>
                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="control-group">
                                        <label className="control-label" htmlFor="admin_id"><i class='bx bxs-universal-access' ></i>Tài khoản</label>
                                        <div className="controls">
                                            <input name='users'
                                                value={formData.users}
                                                onChange={handleChangeValue} type="text" className="input-xlarge" id="admin_id" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label" htmlFor="admin_name"><i class='bx bxs-rename' ></i>Tên</label>
                                        <div className="controls">
                                            <input name='names'
                                                value={formData.names}
                                                onChange={handleChangeValue} type="text" className="input-xlarge" id="admin_name" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label" htmlFor="admin_password"><i class='bx bx-barcode' ></i>Mật khẩu</label>
                                        <div className="controls">
                                            <input name='passwords'
                                                value={formData.passwords}
                                                onChange={handleChangeValue} type="password" className="input-xlarge" id="admin_password" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label" htmlFor="admin_phone"><i class='bx bxs-phone' ></i>Điện thoại</label>
                                        <div className="controls">
                                            <input type="text" className="input-xlarge" id="admin_phone" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <label className="control-label" htmlFor="admin_status"><i class='bx bxs-location-plus' ></i>Vị trí</label>
                                        <div className="controls">
                                            <select id="admin_status" className="input-xlarge" name='managers'
                                                onChange={handleChangeValue}
                                                value={formData.managers}>
                                                <option value={0}>Người quản lý</option>
                                                <option value={1}>Nhân viên bảo trì</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-actions" >
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

export default AddUser;