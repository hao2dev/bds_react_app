import React, {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import "../ProductManager/ProductManager.css";
import Header from "../../../component/Header";
import FooterSection from "../../../component/FooterSection";
import abroad from "../../../assets/img/index/abroad-classic01.jpg";
import advice from "../../../assets/img/index/abroad-unique02.jpg";
import { useSelector } from "react-redux";
import { checkLikeProductSelector } from "../../../Redux/selector";
<<<<<<< HEAD
import { db } from '../../../firebase/connect';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const ProductLikePage = () => {
  // const handleDeleteProduct = async (record) => {
  //   if (window.confirm(`Bạn có muốn xóa ${record.name} không?`) == true) {
  //     const taskDocRef = doc(db, 'products', record.id);
  //     try {
  //       await deleteDoc(taskDocRef);
  //       alert('Đã xóa thành công');
  //     } catch (err) {
  //       alert(err);
  //     }
  //   }
  // };
=======
import { Space, Table, Button } from "antd";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../../firebase/connect";
const ProductLikePage = () => {
  const [product, setProduct] = useState([]);
>>>>>>> c2a292ec54b60b02686625325330a3cf747a335f
  const productLike = JSON.parse(localStorage.getItem("productLike")) || [];
  const getProductLike = () => {
    setProduct(productLike);
  };
  useEffect(() => {
    getProductLike();
  }, []);

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render: (_, text) => (
        <Space>
          <img style={{ width: "150px" }} src={text.img} alt="" />
        </Space>
      ),
    },
    {
      title: "Tên",
      dataIndex: "title",
      key: "age",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "address",
    },
    {
      title: "Diện tích",
      dataIndex: "area",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleDelete(record.id)}>Xóa</Button>
        </Space>
      ),
    },
  ];
  const handleDelete = (id) => {
    const filtered = product.filter((item) => item.id !== id);
    localStorage.setItem("productLike", JSON.stringify(filtered));
  };
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <div className="container content-section">
        <hr />
        <h2 className="section-header">
          <i className="bx bx-building-house" /> Dự án đã thích
        </h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">DỰ ÁN</span>
          <span className="cart-price cart-header cart-column">GIÁ</span>
          <span className="cart-quantity cart-header cart-column">
            SỐ LƯỢNG
          </span>
        </div>
        <div className="cart-items">
          {productLike.length > 0 ? (
            productLike.map((product, index) => {
              return (
                <div className="cart-row" key={index}>
                  <div className="cart-item cart-column">
                    <img
                      className="cart-item-image"
                      alt=""
                      src={product.img}
                      width="100px"
                      height="100px"
                    />
                    <span className="cart-item-title">{product.title}</span>
                  </div>
                  <span className="cart-price cart-column">
                    {product.price}
                  </span>
                  <div className="cart-quantity cart-column">
                    <input
                      className="cart-quantity-input"
                      type="number"
                      defaultValue={1}
                    />
                    <button className="btn btn-danger" type="button" >
                      Xoá
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No data !!</h2>
          )}
        </div>
        {/* <div className="cart-total">
          <strong className="cart-total-title">Tổng</strong>
          <span className="cart-total-price">3.000.000.000 đ</span>
        </div> */}
      </div>
=======
      <Table columns={columns} dataSource={product} />
>>>>>>> c2a292ec54b60b02686625325330a3cf747a335f
      <FooterSection />
    </div>
  );
};

export default ProductLikePage;
