import React, { Component, useEffect, useState } from "react";
import "../NorthProduct/NorthProduct.css";
import ColumnSection from "../../../component/ColumnSection";
import FooterSection from "../../../component/FooterSection";
import Header from "../../../component/Header";
import doolin_house_dublin01 from "../../../assets/img/index/doolin-house-dublin01.jpeg";
import glasnevin_dublin01 from "../../../assets/img/index/glasnevin-dublin01.jpeg";
import templeogue_dublin01 from "../../../assets/img/index/templeogue-dublin01.jpeg";
import charlotte_quay_dublin01 from "../../../assets/img/index/charlotte-quay-dublin01.jpeg";
import killinick_wexford01 from "../../../assets/img/index/killinick-wexford01.jpeg";
import dingle01 from "../../../assets/img/index/dingle01.jpeg";
import stone_hall from "../../../assets/img/local-properties/stone-hall/01.jpeg";
import sherkin_island from "../../../assets/img/local-properties/sherkin-island/01.jpg";
import { Alert, Space } from "antd";
import Product from "../../../component/Product";
import { checkLikeProductSelector } from "../../../Redux/selector";
import { useSelector } from "react-redux";
let productNorth = Array(15).fill(5);
const Products = () => {
  const data = useSelector(checkLikeProductSelector);
  console.log(data);

  return (
    <>
      <div>
        <Header />
        <section className="local-property-card-section pt-md-5">
          <h1>Các dự án ở phía Bắc</h1>

          <div className="content">
            {productNorth.map((_,index) => {
              return (
                <Product
                  img={doolin_house_dublin01}
                  price="1.853.000.000"
                  title={`Hà Nội Room ${index} Sang trọng`}
                  bed="2"
                  bathtub="1"
                  area="350 mét vuông"
                />
              );
            })}
          </div>
        </section>
        <ColumnSection></ColumnSection>
        <FooterSection></FooterSection>
      </div>
    </>
  );
};

export default Products;
