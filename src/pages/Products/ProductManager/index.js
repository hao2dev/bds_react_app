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
import { Space, Table, Button } from "antd";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../../firebase/connect";
const ProductLikePage = () => {
  const [product, setProduct] = useState([]);
  const productLike = JSON.parse(localStorage.getItem("productLike")) || [];
  const getProductLike = () => {
    setProduct(productLike);
  };
  //Change product in depen
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
      <Table columns={columns} dataSource={product} />
      <FooterSection />
    </div>
  );
};

export default ProductLikePage;
