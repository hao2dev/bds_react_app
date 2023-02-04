import Footer from "../../../Footer";
import Header from "../../../Header";
import Navbar from "../../../Navbar";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/connect";


const RemoveUser = () => {
    const [postLists, setPostList] = useState([]);

    const postsRef = collection(db, 'accounts');
    const getPost = query(postsRef, orderBy('users', 'desc'));
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(getPost);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, [postsRef]);
    
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
          try {
            await deleteDoc(doc(db, 'accounts', id));
          } catch (error) {
            console.log(error);
          }
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
                                <h1>Quản lý người dùng <br></br> <small>Xoá tài khoản người dùng</small></h1>
                            </div>
                            <table className="table table-striped table-bordered table-condensed">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Tài khoản</th>
                                        <th>Tên đăng nhập</th>
                                        <th>Mật khẩu</th>
                                        <th>Vị trí</th>
                                        <th>Thời gian thêm</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {postLists.map((post) => (
                                        <tr className="douban-list">
                                        <td>{post.id}</td>
                                        <td>{post.names}</td>
                                        <td>{post.users}</td>
                                        <td>{post.passwords}</td>
                                        <td>{(post.managers==1)?"Nhân viên bảo trì":"Nhân Viên quản lý"}</td>
                                        <td><button onClick={(id)=>handleDelete(post.id)} className="remove">Xoá</button></td>
                                    </tr>
                                    ))}
                                    

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

export default RemoveUser;